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
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/requests");
        setRequests(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
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

  const value = useMemo(
    () => ({ requests, filteredRequests, addRequest, updateFilter }),
    [requests, filteredRequests, addRequest, updateFilter],
  );

  return (
    <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
  );
};

export default RequestContextProvider;
