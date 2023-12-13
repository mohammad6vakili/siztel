import { useState } from "react";
import useHttp from "./use_http";

const useCdr = () => {
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getCdr: false,
    createCdr: false,
    updateCdr: false,
  });

  const [filters, setFilters] = useState({
    RunIDs: "",
    Tenants: "",
    Accounts: "",
    Category: "",
  });

  const getCdr = async (without_filter) => {
    let postData = without_filter
      ? {
          RunIDs: [""],
          Tenants: [""],
          Accounts: [""],
          Category: [""],
        }
      : {
          RunIDs: [filters.RunIDs],
          Tenants: [filters.Tenants],
          Accounts: [filters.Accounts],
          Category: [filters.Category],
        };
    try {
      setLoadings({ ...loadings, getCdr: true });
      const response = await httpService.post("", {
        id: "11111",
        method: "APIerSv2.GetCDRs",
        params: [postData],
      });
      setLoadings({ ...loadings, getCdr: false });
      console.log(response.data);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getCdr: false });
    }
  };

  const exports = { getCdr, filters, setFilters, loadings };
  return exports;
};
export default useCdr;
