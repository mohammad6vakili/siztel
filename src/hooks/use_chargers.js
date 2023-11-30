import { useState } from "react";
import { createChargerSchema } from "../utility/schemas/index";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useHttp from "./use_http";

const useChargers = () => {
  const navigate = useNavigate();
  const { httpService } = useHttp();

  const [loadings, setLoadings] = useState({
    getChargers: false,
    createCharger: false,
    updateCharger: false,
    deleteCharger: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const createChargerController = useFormik({
    initialValues: {
      TPid: "",
      Tenant: "",
      ID: "",
      FilterIDs: [],
      ActivationTime: "",
      ExpiryTime: "",
      RunID: "",
      AttributeIDs: [],
      Weight: 0,
    },
    validationSchema: createChargerSchema,
    onSubmit: (values) => {
      createCharger(values);
    },
  });

  const createCharger = async (values) => {
    try {
      setLoadings({ ...loadings, createCharger: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPCharger",
        params: [
          {
            TPid: values.TPid,
            Tenant: values.Tenant,
            ID: values.ID,
            FilterIDs: values.FilterIDs,
            ActivationInterval: {
              ActivationTime: values.ActivationTime,
              ExpiryTime: values.ExpiryTime,
            },
            RunID: values.RunID,
            AttributeIDs: values.AttributeIDs,
            Weight: values.Weight,
          },
        ],
      });
      setLoadings({ ...loadings, createCharger: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/chargers");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createCharger: false });
    }
  };

  const updateChargerController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      Actions: [],
    },
    validationSchema: createChargerSchema,
    onSubmit: (values) => {
      updateActionPlan(values);
    },
  });

  const updateActionPlan = async (values) => {
    try {
      setLoadings({ ...loadings, updateCharger: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPCharger",
        params: [
          {
            TPid: values.TPid,
            Tenant: values.Tenant,
            ID: values.ID,
            FilterIDs: values.FilterIDs,
            ActivationInterval: {
              ActivationTime: values.ActivationTime,
              ExpiryTime: values.ExpiryTime,
            },
            RunID: values.RunID,
            AttributeIDs: values.AttributeIDs,
            Weight: values.Weight,
          },
        ],
      });
      setLoadings({ ...loadings, updateCharger: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/chargers");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateCharger: false });
    }
  };

  const exports = {
    createChargerController,
    updateChargerController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useChargers;
