import { useState } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createActionSchema } from "../utility/schemas/index";
import { setDeleteModal, setSlots } from "../redux/action_plans_slice";

const useActionPlans = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getActionPlans: false,
    getEntityById: false,
    createActionPlan: false,
    updateActionPlan: false,
    deleteEntity: false,
  });

  const [listData, setListData] = useState([]);

  const slots = useSelector((state) => state.actionPlans.slots);
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const getActionPlans = async () => {
    let array = [];
    try {
      setLoadings({ ...loadings, getActionPlans: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPActionPlanIds",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setLoadings({ ...loadings, getActionPlans: false });
      response?.data?.result?.map((item) => {
        array.push({
          ID: item,
        });
      });
      setListData(array);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getActionPlans: false });
    }
  };

  const getEntityById = async (id) => {
    try {
      setLoadings({ ...loadings, getEntityById: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPActionPlan",
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
        updateActionPlan.setFieldValue("ID", response?.data?.result?.ID);
        dispatch(setSlots(response?.data?.result?.ActionTriggers));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getEntityById: false });
    }
  };

  const createActionPlanController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
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
            TPid: selectedTpId,
            ID: values.ID,
            ActionPlan: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createActionPlan: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/action_plans");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createActionPlan: false });
    }
  };

  const updateActionPlanController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
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
            TPid: selectedTpId,
            ID: values.ID,
            ActionPlan: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateActionPlan: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/action_plans");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateActionPlan: false });
    }
  };

  const deleteEntity = async (id) => {
    try {
      setLoadings({ ...loadings, deleteEntity: true });
      const response = await httpService.post("", {
        method: "APIerSv1.RemoveTPActionPlan",
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
      getActionPlans();
    } catch ({ err, response }) {
      setLoadings({ ...loadings, deleteEntity: false });
    }
  };

  const exports = {
    getActionPlans,
    getEntityById,
    createActionPlanController,
    updateActionPlanController,
    deleteEntity,
    listData,
    loadings,
  };
  return exports;
};
export default useActionPlans;
