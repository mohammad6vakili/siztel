import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createActionSchema } from "../utility/schemas/index";
import { setSlots, setDeleteModal } from "../redux/shared_groups_slice";

const useSharedGroups = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { httpService } = useHttp();

  const [loadings, setLoadings] = useState({
    getSharedGroups: false,
    getEntityById: false,
    createSharedGroup: false,
    updateSharedGroup: false,
    deleteEntity: false,
  });

  const [listData, setListData] = useState([]);

  const slots = useSelector((state) => state.sharedGroups.slots);
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const getSharedGroups = async () => {
    let array = [];
    try {
      setLoadings({ ...loadings, getSharedGroups: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPSharedGroupIds",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setLoadings({ ...loadings, getSharedGroups: false });
      response?.data?.result?.map((item) => {
        array.push({
          ID: item,
        });
      });
      setListData(array);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getSharedGroups: false });
    }
  };

  const getEntityById = async (id) => {
    try {
      setLoadings({ ...loadings, getEntityById: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPSharedGroups",
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
        navigate("/rules/shared_groups");
      } else {
        updateSharedGroupController.setFieldValue(
          "ID",
          response?.data?.result?.ID
        );
        dispatch(setSlots(response?.data?.result?.SharedGroups));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getEntityById: false });
    }
  };

  const createSharedGroupController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      SharedGroups: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
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
            TPid: selectedTpId,
            ID: values.ID,
            SharedGroups: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createSharedGroup: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/shared_groups");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createSharedGroup: false });
    }
  };

  const updateSharedGroupController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      SharedGroups: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
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
            TPid: selectedTpId,
            ID: values.ID,
            SharedGroups: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateSharedGroup: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/shared_groups");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateSharedGroup: false });
    }
  };

  const deleteEntity = async (id) => {
    try {
      setLoadings({ ...loadings, deleteEntity: true });
      const response = await httpService.post("", {
        method: "APIerSv1.RemoveTPSharedGroups",
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
      getSharedGroups();
    } catch ({ err, response }) {
      setLoadings({ ...loadings, deleteEntity: false });
    }
  };

  const exports = {
    getSharedGroups,
    getEntityById,
    createSharedGroupController,
    updateSharedGroupController,
    deleteEntity,
    listData,
    loadings,
  };
  return exports;
};
export default useSharedGroups;
