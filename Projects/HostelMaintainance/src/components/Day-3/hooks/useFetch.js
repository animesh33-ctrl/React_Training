import axios from "axios";
import { useEffect, useState, useCallback } from "react";

// details :
// { method: "get" }
// { method: "post", body: {...},url:"" }
// { method: "patch", id: "123", body: {...} }

const useFetch = (url="", details = { method: "get" }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (details.method !== "get") return; // only auto-fetch on GET
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url, { signal: controller.signal });
        setData(res.data);
      } catch (err) {
        if (axios.isCancel(err)) return;
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url]);

  const execute = useCallback(async (overrideDetails) => {
    const config = overrideDetails || details;
    setLoading(true);
    setError(null);
    try {
      let res;
      switch (config.method) {
        case "post":
          res = await axios.post(config.url, config.body);
          setData((prev) => [...prev, res.data]);
          break;
        case "patch":
          res = await axios.patch(`${config.url}/${config.id}`, config.body);
          setData((prev) => prev.map((r) => (r.id === config.id ? res.data : r)));
          break;
      }
      return res?.data;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [details]);

  return { data, setData, loading, error, execute };
};

export default useFetch;