import { useState } from "react";
import { createActionSchema } from "../utility/schemas/index";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import useHttp from "./use_http";
import { useNavigate } from "react-router-dom";

const useActionTriggers = () => {
  const navigate = useNavigate();
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getActionTriggers: false,
    createActionTrigger: false,
    updateActionTrigger: false,
    deleteActionTrigger: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const slots = useSelector((state) => state.actionTriggers.slots);

  const createActionTriggerController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one action trigger.");
      } else {
        createActionTrigger(values, slots);
      }
    },
  });

  const createActionTrigger = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, createActionTrigger: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPActionTriggers",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            Actions: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createActionTrigger: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/action_triggers");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createActionTrigger: false });
    }
  };

  const exports = {
    createActionTriggerController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useActionTriggers;
