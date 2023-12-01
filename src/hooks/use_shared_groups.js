import { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createActionSchema } from "../utility/schemas/index";

const useSharedGroups = () => {
  const navigate = useNavigate();
  const { httpService } = useHttp();

  const [loadings, setLoadings] = useState({
    getSharedGroups: false,
    createSharedGroup: false,
    updateSharedGroup: false,
    deleteSharedGroup: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const slots = useSelector((state) => state.sharedGroups.slots);

  const createSharedGroupController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      SharedGroups: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one shared group.");
      } else {
        createSharedGroup(values, slots);
      }
    },
  });

  const createSharedGroup = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, createSharedGroup: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPSharedGroups",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            SharedGroups: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createSharedGroup: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/shared_groups");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createSharedGroup: false });
    }
  };

  const updateSharedGroupController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      SharedGroups: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one shared group.");
      } else {
        updateSharedGroup(values, slots);
      }
    },
  });

  const updateSharedGroup = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, updateSharedGroup: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPSharedGroups",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            SharedGroups: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateSharedGroup: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/shared_groups");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateSharedGroup: false });
    }
  };

  const exports = {
    createSharedGroupController,
    updateSharedGroupController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useSharedGroups;
