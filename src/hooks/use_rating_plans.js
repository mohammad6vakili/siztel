import { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createActionSchema } from "../utility/schemas/index";

const useRatingPlans = () => {
  const navigate = useNavigate();
  const { httpService } = useHttp();

  const [loadings, setLoadings] = useState({
    getRatingPlans: false,
    createRatingPlan: false,
    updateRatingPlan: false,
    deleteRatingPlan: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const slots = useSelector((state) => state.ratingPlans.slots);

  const createRatingPlanController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      RatingPlanBindings: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one rating plan bindings.");
      } else {
        createRatingPlan(values, slots);
      }
    },
  });

  const createRatingPlan = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, createRatingPlan: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPRatingPlan",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            RatingPlanBindings: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createRatingPlan: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/rating_plans");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createRatingPlan: false });
    }
  };

  const updateRatingPlanController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      RatingPlanBindings: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one rating plan bindings.");
      } else {
        updateRatingPlan(values, slots);
      }
    },
  });

  const updateRatingPlan = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, updateRatingPlan: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPRatingPlan",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            RatingPlanBindings: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateRatingPlan: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/rating_plans");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateRatingPlan: false });
    }
  };

  const exports = {
    createRatingPlanController,
    updateRatingPlanController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useRatingPlans;
