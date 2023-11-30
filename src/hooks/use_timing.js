import { useState } from "react";

const useTiming = () => {
  const [loadings, setLoadings] = useState({
    getTimings: false,
    createTiming: false,
    updateTiming: false,
    deleteTiming: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const createTimingController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      MonthDays: "",
      Months: "",
      Time: "",
      WeekDays: "",
      Years: "",
    },
    validationSchema: null,
    onSubmit: (values) => {
      // createCharger(values);
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
      Tenant: "",
      ID: "",
      ActivationTime: "",
      ExpiryTime: "",
      RunID: "",
      Weight: 0,
      FilterIDs: [],
      AttributeIDs: [],
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

  const exports = { createTimingController, loadings, paginates, setPaginates };
  return exports;
};
export default useTiming;
