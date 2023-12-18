import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useInvoice = () => {
  const [loadings, setLoadings] = useState({
    getInvoices: false,
    createInvoice: false,
    updateInvoice: false,
  });

  const [filters, setFilters] = useState({
    imsi: "",
    from_time: null,
    to_time: null,
  });

  const getInvoices = async (without_filter) => {
    let postData = {
      imsi: "",
      from_time: "",
      to_time: "",
      page: 1,
      per_page: 100,
    };
    if (!without_filter && filters.imsi.length > 0) {
      postData.imsi = filters.imsi;
    }
    if (!without_filter && filters.from_time) {
      postData.from_time =
        filters.from_time.year +
        "/" +
        filters.from_time.month +
        "/" +
        filters.from_time.day +
        "T00:00:00Z";
    }
    if (!without_filter && filters.to_time) {
      postData.to_time =
        filters.to_time.year +
        "/" +
        filters.to_time.month +
        "/" +
        filters.to_time.day +
        "T00:00:00Z";
    }
    try {
      setLoadings({ ...loadings, getInvoices: true });
      const response = await axios.get(
        "http://93.113.233.131:12081/v1/invoices/search",
        postData
      );
      setLoadings({ ...loadings, getInvoices: false });
      console.log(response.data);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getInvoices: false });
      toast.error("Server Error!");
    }
  };

  const exports = { getInvoices, loadings, filters, setFilters };
  return exports;
};
export default useInvoice;
