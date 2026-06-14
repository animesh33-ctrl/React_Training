import axios from "axios";
import { useEffect, useMemo, useState, useCallback } from "react";
import { RequestContext } from "./RequestContextObject";

const RequestContextProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    category: "",
    status: "",
  });

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/requests", {
          signal: controller.signal,
        });
        setRequests(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  const addRequest = useCallback((newRequest) => {
    setRequests((prev) => [...prev, newRequest]);
  }, []);

  const updateFilter = useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const filteredRequests = useMemo(() => {
    return requests.filter((r) => {
      const matchTitle = filters.title
        ? r.title.toLowerCase().includes(filters.title.toLowerCase())
        : true;
      const matchCategory = filters.category
        ? r.category === filters.category
        : true;
      const matchStatus = filters.status ? r.status === filters.status : true;
      return matchTitle && matchCategory && matchStatus;
    });
  }, [requests, filters]);

  const updateStatus = useCallback(async (id, status) => {
    const res = await axios.patch(`http://localhost:3000/requests/${id}`, {
      status,
    });
    setRequests((prev) => prev.map((r) => (r.id === id ? res.data : r)));
  }, []);

  const value = useMemo(
    () => ({
      requests,
      filteredRequests,
      addRequest,
      updateFilter,
      updateStatus,
    }),
    [requests, filteredRequests, addRequest, updateFilter, updateStatus],
  );

  return (
    <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
  );
};

export default RequestContextProvider;
