import { useState } from "react";
import useHttp from "./use_http";

const useApp = () => {
  const { httpService } = useHttp();

  const [loadings, setLoadings] = useState({
    getAllTpIds: false,
  });

  const getAllTpIds = async () => {
    try {
      setLoadings({ ...loadings, getAllTpIds: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPIds",
        params: [
          {
            TPid: null,
            Limit: null,
            Offset: null,
          },
        ],
      });
      setLoadings({ ...loadings, getAllTpIds: false });
      console.log(response.data);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getAllTpIds: false });
    }
  };

  const exports = { getAllTpIds, loadings };
  return exports;
};
export default useApp;
