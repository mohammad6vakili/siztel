import { useState } from "react";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createActionSchema } from "../utility/schemas/index";
import { useSelector } from "react-redux";

const useActions = () => {
  const navigate = useNavigate();
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getActions: false,
    createAction: false,
    updateAction: false,
    deleteAction: false,
  });

  const slots = useSelector((state) => state.actions.slots);

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
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

  const createActionController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one action.");
      } else {
        createAction(values, slots);
      }
    },
  });

  const createAction = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    console.log({
      TPid: values.TPid,
      ID: values.ID,
      Actions: newSlots,
    });
    try {
      setLoadings({ ...loadings, createAction: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPActions",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            Actions: newSlots,
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

  const updateActionController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one action.");
      } else {
        updateAction(values, slots);
      }
    },
  });

  const updateAction = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, updateAction: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPActions",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            Actions: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateAction: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/actions");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateAction: false });
    }
  };

  const exports = {
    createActionController,
    updateActionController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useActions;
