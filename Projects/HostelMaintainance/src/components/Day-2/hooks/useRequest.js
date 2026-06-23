import { useMemo, useState } from "react";
import useFetch from "./useFetch";


const useRequest = () => {

    const {data:requests} = useFetch("http://localhost:3000/requests");

    const [filters, setFilters] = useState({
        title: "",
        category: "",
        status: "",
      });
      const filteredRequests = useMemo(() => {
    // console.log("Called");
    return requests.filter((r) => {
      const matchTitle = filters.title
        ? r.title.toLowerCase().includes(filters.title.toLowerCase())
        : true;
      const matchCategory = filters.category
        ? r.category === filters.category
        : true;
      const matchStatus = filters.status ? r.status === filters.status : true;
      const matchPriority = filters.priority
        ? r.priority === filters.priority
        : true;
      return matchTitle && matchCategory && matchStatus && matchPriority;
    });
  }, [requests, filters]);
  return ({filters,setFilters,filteredRequests} )
}

export default useRequest;