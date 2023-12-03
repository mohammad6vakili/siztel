import { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createActionSchema } from "../utility/schemas/index";

const useActionPlans = () => {
  const navigate = useNavigate();
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getActionPlans: false,
    createActionPlan: false,
    updateActionPlan: false,
    deleteActionPlan: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const slots = useSelector((state) => state.actionPlans.slots);

  const getActionPlans = async () => {
    try {
      setLoadings({ ...loadings, getActionPlans: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPActionPlanIds",
        params: [
          {
            TPid: null,
            Limit: null,
            Offset: null,
          },
        ],
      });
      setLoadings({ ...loadings, getActionPlans: false });
      console.log(response.data);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getActionPlans: false });
    }
  };

  const createActionPlanController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one action plan.");
      } else {
        createActionPlan(values, slots);
      }
    },
  });

  const createActionPlan = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, createActionPlan: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPActionPlan",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            ActionPlan: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createActionPlan: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/action_plans");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createActionPlan: false });
    }
  };

  const updateActionPlanController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one action plan.");
      } else {
        updateActionPlan(values, slots);
      }
    },
  });

  const updateActionPlan = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, updateActionPlan: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPActionPlan",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            ActionPlan: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateActionPlan: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/action_plans");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateActionPlan: false });
    }
  };

  const exports = {
    getActionPlans,
    createActionPlanController,
    updateActionPlanController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useActionPlans;
