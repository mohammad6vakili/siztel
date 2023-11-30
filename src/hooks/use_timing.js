import { useState } from "react";
import { createTimingSchema } from "../utility/schemas/index";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useHttp from "./use_http";

const useTiming = () => {
  const { httpService } = useHttp();
  const navigate = useNavigate();

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

  const updateTimingController = useFormik({
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
      updateTiming(values);
    },
  });

  const updateTiming = async (values) => {
    try {
      setLoadings({ ...loadings, updateTiming: true });
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
      setLoadings({ ...loadings, updateTiming: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/timing");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateTiming: false });
    }
  };

  const exports = {
    createTimingController,
    updateTimingController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useTiming;
