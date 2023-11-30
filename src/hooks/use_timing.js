import { useState } from "react";
import { createTimingSchema } from "../utility/schemas/index";

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
    validationSchema: createTimingSchema,
    onSubmit: (values) => {
      createTiming(values);
    },
  });

  const createTiming = async (values) => {
    try {
      setLoadings({ ...loadings, createTiming: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPTiming",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            MonthDays: values.MonthDays,
            Months: values.Months,
            Time: values.Time,
            WeekDays: values.WeekDays,
            Years: values.Years,
          },
        ],
      });
      setLoadings({ ...loadings, createTiming: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/timing");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createTiming: false });
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
