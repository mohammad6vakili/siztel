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
    Tenants: "cgrates.org",
    Accounts: "",
    Category: "",
  });

  const [listData, setListData] = useState([]);

  const getCdr = async (without_filter) => {
    let postData = {
      RunIDs: [],
      Tenants: [],
      Accounts: [],
      Category: [],
    };
    if (filters.RunIDs.length > 0 && !without_filter) {
      postData.RunIDs.push(filters.RunIDs);
    }
    if (filters.Tenants.length > 0 && !without_filter) {
      postData.Tenants.push(filters.Tenants);
    }
    if (filters.Accounts.length > 0 && !without_filter) {
      postData.Accounts.push(filters.Accounts);
    }
    if (filters.Category.length > 0 && !without_filter) {
      postData.Category.push(filters.Category);
    }
    try {
      setLoadings({ ...loadings, getCdr: true });
      const response = await httpService.post("", {
        id: "11111",
        method: "APIerSv2.GetCDRs",
        params: [postData],
      });
      setLoadings({ ...loadings, getCdr: false });
      if (response.data.result) {
        setListData(response.data.result);
      } else {
        setListData([]);
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getCdr: false });
    }
  };

  const exports = { getCdr, listData, filters, setFilters, loadings };
  return exports;
};
export default useCdr;
