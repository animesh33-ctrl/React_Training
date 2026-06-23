import axios from "axios";
import { useMemo, useCallback } from "react";
import { RequestContext } from "./RequestContextObject";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const RequestContextProvider = ({ children }) => {
  const {
    data: requests,
    setData: setRequests,
    loading,
  } = useFetch("http://localhost:3000/requests");

  const { filters, setFilters, filteredRequests } = useRequest();

  console.log(requests);
  const addRequest = useCallback(
    (newRequest) => {
      setRequests((prev) => [...prev, newRequest]);
    },
    [setRequests],
  );

  const updateFilter = useCallback((key, value) => {
    // console.log("Key: ", key);
    // console.log("Value: ", value);
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  // console.log("After: ", filteredRequests);
  const updateStatus = useCallback(
    async (id, status) => {
      const res = await axios.patch(`http://localhost:3000/requests/${id}`, {
        status,
      });
      setRequests((prev) => prev.map((r) => (r.id === id ? res.data : r)));
    },
    [setRequests],
  );

  const value = useMemo(
    () => ({
      requests,
      filteredRequests,
      filters,
      loading,
      addRequest,
      updateFilter,
      updateStatus,
    }),
    [
      requests,
      filteredRequests,
      loading,
      filters,
      addRequest,
      updateFilter,
      updateStatus,
    ],
  );

  return (
    <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
  );
};

export default RequestContextProvider;
