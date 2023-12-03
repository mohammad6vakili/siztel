import useHttp from "./use_http";
import { useDispatch } from "react-redux";
import {
  setAllTpIds,
  setGetAllTpIdsLoading,
  setSelectedTpId,
} from "../redux/app_slice";

const useApp = () => {
  const { httpService } = useHttp();
  const dispatch = useDispatch();

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

  const exports = { getAllTpIds };
  return exports;
};
export default useApp;
