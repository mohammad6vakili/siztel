import { useState } from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createActionSchema } from "../utility/schemas/index";

const useRates = () => {
  const navigate = useNavigate();
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getRates: false,
    createRate: false,
    updateRate: false,
    deleteRatae: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const slots = useSelector((state) => state.rates.slots);

  const createRateController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      RateSlots: [],
    },
    validationSchema: null,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one rate slot.");
      } else {
        createRate(values, slots);
      }
    },
  });

  const createRate = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, createRate: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPRate",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            RateSlots: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createRate: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/rates");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createRate: false });
    }
  };

  const updateActionPlanController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      RateSlots: [],
    },
    validationSchema: null,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one rate slot.");
      } else {
        updateRate(values, slots);
      }
    },
  });

  const updateRate = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, updateRate: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPRate",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            RateSlots: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateRate: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/rates");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateRate: false });
    }
  };

  const exports = {
    createRateController,
    updateActionPlanController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useRates;
