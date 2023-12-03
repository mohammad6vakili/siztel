import { useState } from "react";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createActionSchema } from "../utility/schemas/index";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal, setSlots } from "../redux/actions_slice";

const useActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getActions: false,
    getActionById: false,
    createAction: false,
    updateAction: false,
    deleteAction: false,
  });

  const [listData, setListData] = useState([]);

  const slots = useSelector((state) => state.actions.slots);
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const getActions = async () => {
    let array = [];
    try {
      setLoadings({ ...loadings, getActions: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPActionIds",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setLoadings({ ...loadings, getActions: false });
      response?.data?.result?.map((item) => {
        array.push({
          ID: item,
        });
      });
      setListData(array);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getActions: false });
    }
  };

  const getActionById = async (id) => {
    try {
      setLoadings({ ...loadings, getActionById: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPActions",
        params: [
          {
            TPid: selectedTpId,
            ID: id,
          },
        ],
      });
      setLoadings({ ...loadings, getActionById: false });
      updateActionController.setFieldValue("ID", response?.data?.result?.ID);
      dispatch(setSlots(response?.data?.result?.Actions));
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getActionById: false });
    }
  };

  const createActionController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
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
    try {
      setLoadings({ ...loadings, createAction: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPActions",
        params: [
          {
            TPid: selectedTpId,
            ID: values.ID,
            Actions: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createAction: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/actions");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createAction: false });
    }
  };

  const updateActionController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
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
            TPid: selectedTpId,
            ID: values.ID,
            Actions: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateAction: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/actions");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateAction: false });
    }
  };

  const deleteAction = async (id) => {
    try {
      setLoadings({ ...loadings, deleteAction: true });
      const response = await httpService.post("", {
        method: "APIerSv1.RemoveTPActions",
        params: [
          {
            TPid: selectedTpId,
            ID: id,
          },
        ],
      });
      setLoadings({ ...loadings, deleteAction: false });
      dispatch(setDeleteModal(null));
      toast.success("Successfully Deleted.");
      getActions();
    } catch ({ err, response }) {
      setLoadings({ ...loadings, deleteAction: false });
    }
  };

  const exports = {
    getActions,
    getActionById,
    createActionController,
    updateActionController,
    deleteAction,
    listData,
    loadings,
  };
  return exports;
};
export default useActions;
