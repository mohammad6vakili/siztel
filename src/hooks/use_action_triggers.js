import { useState } from "react";
import { createActionSchema } from "../utility/schemas/index";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import useHttp from "./use_http";
import { useNavigate } from "react-router-dom";
import { setDeleteModal, setSlots } from "../redux/action_triggers_slice";

const useActionTriggers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getActionTriggers: false,
    getEntityById: false,
    createActionTrigger: false,
    updateActionTrigger: false,
    deleteEntity: false,
  });

  const [listData, setListData] = useState([]);

  const slots = useSelector((state) => state.actionTriggers.slots);
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const getActionTriggers = async () => {
    let array = [];
    try {
      setLoadings({ ...loadings, getActionTriggers: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPActionTriggerIds",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setLoadings({ ...loadings, getActionTriggers: false });
      response?.data?.result?.map((item) => {
        array.push({
          ID: item,
        });
      });
      setListData(array);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getActionTriggers: false });
    }
  };

  const getEntityById = async (id) => {
    try {
      setLoadings({ ...loadings, getEntityById: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPActionTriggers",
        params: [
          {
            TPid: selectedTpId,
            ID: id,
          },
        ],
      });
      setLoadings({ ...loadings, getEntityById: false });
      if (response?.data?.error === "NOT_FOUND") {
        toast.error(response?.data?.error);
        navigate("/rules/action_triggers");
      } else {
        updateActionTriggerController.setFieldValue(
          "ID",
          response?.data?.result?.ID
        );
        dispatch(setSlots(response?.data?.result?.ActionTriggers));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getEntityById: false });
    }
  };

  const createActionTriggerController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
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
            TPid: selectedTpId,
            ID: values.ID,
            ActionTriggers: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createActionTrigger: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/action_triggers");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createActionTrigger: false });
    }
  };

  const updateActionTriggerController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one action trigger.");
      } else {
        updateActionTrigger(values, slots);
      }
    },
  });

  const updateActionTrigger = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, updateActionTrigger: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPActionTriggers",
        params: [
          {
            TPid: selectedTpId,
            ID: values.ID,
            ActionTriggers: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateActionTrigger: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/action_triggers");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateActionTrigger: false });
    }
  };

  const deleteEntity = async (id) => {
    try {
      setLoadings({ ...loadings, deleteEntity: true });
      const response = await httpService.post("", {
        method: "APIerSv1.RemoveTPActionTriggers",
        params: [
          {
            TPid: selectedTpId,
            ID: id,
          },
        ],
      });
      setLoadings({ ...loadings, deleteEntity: false });
      dispatch(setDeleteModal(null));
      toast.success("Successfully Deleted.");
      getActionTriggers();
    } catch ({ err, response }) {
      setLoadings({ ...loadings, deleteEntity: false });
    }
  };

  const exports = {
    getActionTriggers,
    getEntityById,
    createActionTriggerController,
    updateActionTriggerController,
    deleteEntity,
    listData,
    loadings,
  };
  return exports;
};
export default useActionTriggers;
