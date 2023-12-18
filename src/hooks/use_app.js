import { useState } from "react";
import useHttp from "./use_http";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllTpIds,
  setGetAllTpIdsLoading,
  setSelectedTpId,
} from "../redux/app_slice";

const useApp = () => {
  const { httpService } = useHttp();
  const dispatch = useDispatch();

  const [loadings, setLoadings] = useState({
    syncRules: false,
  });

  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const getAllTpIds = async () => {
    try {
      dispatch(setGetAllTpIdsLoading(true));
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
      dispatch(setGetAllTpIdsLoading(false));
      dispatch(setAllTpIds(response.data.result));
      dispatch(setSelectedTpId(response.data.result[0]));
    } catch ({ err, response }) {
      dispatch(setGetAllTpIdsLoading(false));
    }
  };

  const syncRules = async () => {
    try {
      setLoadings({ ...loadings, syncRules: true });
      const response = await httpService.post("", {
        id: 6,
        method: "APIerSv1.LoadTariffPlanFromStorDb",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setLoadings({ ...loadings, syncRules: false });
    } catch ({ err, response }) {
      setLoadings({ ...loadings, syncRules: false });
    }
  };

  const exports = { getAllTpIds, syncRules, loadings };
  return exports;
};
export default useApp;
