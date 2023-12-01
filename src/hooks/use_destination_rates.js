import { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createActionSchema } from "../utility/schemas/index";

const useDestinationRates = () => {
  const navigate = useNavigate();
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getDestinationRates: false,
    createDestinationRate: false,
    updateDestinationRate: false,
    deleteDestinationRate: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const slots = useSelector((state) => state.destinationRates.slots);

  const createDestinationRateController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      DestinationRates: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one destination rate.");
      } else {
        createDestinationRate(values, slots);
      }
    },
  });

  const createDestinationRate = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, createDestinationRate: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPDestinationRate",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            DestinationRates: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createDestinationRate: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/destination_rates");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createDestinationRate: false });
    }
  };

  const updateDestinationRateController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      DestinationRates: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one destination rate.");
      } else {
        updateDestinationRate(values, slots);
      }
    },
  });

  const updateDestinationRate = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, updateDestinationRate: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPDestinationRate",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            DestinationRates: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateDestinationRate: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/destination_rates");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateDestinationRate: false });
    }
  };

  const exports = {
    createDestinationRateController,
    updateDestinationRateController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useDestinationRates;
