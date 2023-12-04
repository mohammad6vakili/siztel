import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createActionSchema } from "../utility/schemas/index";
import { setDeleteModal, setSlots } from "../redux/rating_plans_slice";

const useRatingPlans = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { httpService } = useHttp();

  const [loadings, setLoadings] = useState({
    getRatingPlans: false,
    getEntityById: false,
    createRatingPlan: false,
    updateRatingPlan: false,
    deleteEntity: false,
  });

  const [listData, setListData] = useState([]);

  const slots = useSelector((state) => state.ratingPlans.slots);
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const getRatingPlans = async () => {
    let array = [];
    try {
      setLoadings({ ...loadings, getRatingPlans: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPRatingPlanIds",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setLoadings({ ...loadings, getRatingPlans: false });
      response?.data?.result?.map((item) => {
        array.push({
          ID: item,
        });
      });
      setListData(array);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getRatingPlans: false });
    }
  };

  const getEntityById = async (id) => {
    try {
      setLoadings({ ...loadings, getEntityById: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPDestinationRate",
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
        navigate("/rules/rating_plans");
      } else {
        updateRatingPlanController.setFieldValue(
          "ID",
          response?.data?.result?.ID
        );
        dispatch(setSlots(response?.data?.result?.RatingPlanBindings));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getEntityById: false });
    }
  };

  const createRatingPlanController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      RatingPlanBindings: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
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
            TPid: selectedTpId,
            ID: values.ID,
            RatingPlanBindings: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createRatingPlan: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/rating_plans");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createRatingPlan: false });
    }
  };

  const updateRatingPlanController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      RatingPlanBindings: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
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
            TPid: selectedTpId,
            ID: values.ID,
            RatingPlanBindings: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateRatingPlan: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/rating_plans");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateRatingPlan: false });
    }
  };

  const deleteEntity = async (id) => {
    try {
      setLoadings({ ...loadings, deleteEntity: true });
      const response = await httpService.post("", {
        method: "APIerSv1.RemoveTPRatingPlan",
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
      getRatingPlans();
    } catch ({ err, response }) {
      setLoadings({ ...loadings, deleteEntity: false });
    }
  };

  const exports = {
    getRatingPlans,
    getEntityById,
    createRatingPlanController,
    updateRatingPlanController,
    deleteEntity,
    listData,
    loadings,
  };
  return exports;
};
export default useRatingPlans;
