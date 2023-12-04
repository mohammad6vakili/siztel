import { useState } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createRatingProfileSchema } from "../utility/schemas/index";
import { setSlots, setDeleteModal } from "../redux/rating_profiles_slice";

const useRatingProfiles = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { httpService } = useHttp();

  const [loadings, setLoadings] = useState({
    getRatingProfiles: false,
    getEntityById: false,
    createRatingProfile: false,
    updateRatingProfile: false,
    deleteEntity: false,
  });

  const [listData, setListData] = useState([]);

  const slots = useSelector((state) => state.ratingProfiles.slots);
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const getRatingProfiles = async () => {
    let array = [];
    try {
      setLoadings({ ...loadings, getRatingProfiles: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPRatingProfileIds",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setLoadings({ ...loadings, getRatingProfiles: false });
      response?.data?.result?.map((item) => {
        array.push({
          ID: item,
        });
      });
      setListData(array);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getRatingProfiles: false });
    }
  };

  const getEntityById = async (id) => {
    try {
      setLoadings({ ...loadings, getEntityById: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPRatingProfile",
        params: [
          {
            TPid: selectedTpId,
            RatingProfileID: id,
          },
        ],
      });
      setLoadings({ ...loadings, getEntityById: false });
      if (response?.data?.error === "NOT_FOUND") {
        toast.error(response?.data?.error);
        navigate("/rules/rating_profiles");
      } else {
        updateRatingProfileController.setFieldValue(
          "ID",
          response?.data?.result?.ID
        );
        dispatch(setSlots(response?.data?.result?.RatingPlanActivations));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getEntityById: false });
    }
  };

  const createRatingProfileController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      LoadId: "",
      Tenant: "",
      Category: "",
      Subject: "",
      Overwrite: true,
      RatingPlanActivations: [],
      APIOpts: {},
    },
    validationSchema: createRatingProfileSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one rating plan activation.");
      } else {
        createRatingProfile(values, slots);
      }
    },
  });

  const createRatingProfile = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, createRatingProfile: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPRatingProfile",
        params: [
          {
            TPid: selectedTpId,
            LoadId: values.LoadId,
            Tenant: values.Tenant,
            Category: values.Category,
            Subject: values.Subject,
            Overwrite: values.Overwrite,
            RatingPlanActivations: newSlots,
            APIOpts: {},
          },
        ],
      });
      setLoadings({ ...loadings, createRatingProfile: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/rating_profiles");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createRatingProfile: false });
    }
  };

  const updateRatingProfileController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      LoadId: "",
      Tenant: "",
      Category: "",
      Subject: "",
      Overwrite: true,
      RatingPlanActivations: [],
      APIOpts: {},
    },
    validationSchema: createRatingProfileSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one rating plan activation.");
      } else {
        updateRatingProfile(values, slots);
      }
    },
  });

  const updateRatingProfile = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, updateRatingProfile: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPRatingProfile",
        params: [
          {
            TPid: selectedTpId,
            LoadId: values.LoadId,
            Tenant: values.Tenant,
            Category: values.Category,
            Subject: values.Subject,
            Overwrite: values.Overwrite,
            RatingPlanActivations: newSlots,
            APIOpts: {},
          },
        ],
      });
      setLoadings({ ...loadings, updateRatingProfile: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/rating_profiles");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateRatingProfile: false });
    }
  };

  const deleteEntity = async (id) => {
    try {
      setLoadings({ ...loadings, deleteEntity: true });
      const response = await httpService.post("", {
        method: "APIerSv1.RemoveTPRatingProfile",
        params: [
          {
            TPid: selectedTpId,
            RatingProfileID: id,
          },
        ],
      });
      setLoadings({ ...loadings, deleteEntity: false });
      dispatch(setDeleteModal(null));
      toast.success("Successfully Deleted.");
      getRatingProfiles();
    } catch ({ err, response }) {
      setLoadings({ ...loadings, deleteEntity: false });
    }
  };

  const exports = {
    getRatingProfiles,
    getEntityById,
    createRatingProfileController,
    updateRatingProfileController,
    deleteEntity,
    listData,
    loadings,
  };
  return exports;
};
export default useRatingProfiles;
