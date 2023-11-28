import { useState } from "react";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createActionSchema } from "../utility/schemas/index";

const useActions = () => {
  const navigate = useNavigate();
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getActions: false,
    createAction: false,
    updateAction: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const createActionController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      toast.success("Done");
    },
  });

  const getActions = async () => {
    try {
      setLoadings({ ...loadings, getActions: true });
      const response = await httpService.post("");
      setLoadings({ ...loadings, getActions: false });
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getActions: false });
    }
  };

  const createAction = async () => {
    try {
      setLoadings({ ...loadings, createAction: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPActions",
        params: [
          {
            TPid: "DEFAULT",
            ID: "DATA_INC_100",
            Actions: [
              {
                Identifier: "*topup",
                BalanceId: "1G_DATA",
                BalanceType: "*data",
                Units: "100",
                ExpiryTime: "2024-01-14T00:00:00Z",
                Filter: "",
                TimingTags: "*asap",
                DestinationIds: "DEST_999",
                RatingSubject: "*any",
                Categories: "data",
                SharedGroups: "",
                BalanceWeight: "10",
                ExtraParameters: "",
                BalanceBlocker: "false",
                BalanceDisabled: "false",
                Weight: 10,
              },
            ],
          },
        ],
      });
      setLoadings({ ...loadings, createAction: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/actions");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createAction: false });
    }
  };

  const exports = {
    createActionController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useActions;
