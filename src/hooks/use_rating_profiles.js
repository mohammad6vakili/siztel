import { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createRatingProfileSchema } from "../utility/schemas/index";

const useRatingProfiles = () => {
  const navigate = useNavigate();
  const { httpService } = useHttp();

  const [loadings, setLoadings] = useState({
    getRatingProfiles: false,
    createRatingProfile: false,
    updateRatingProfile: false,
    deleteRatingProfile: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const slots = useSelector((state) => state.ratingProfiles.slots);

  const createRatingProfileController = useFormik({
    initialValues: {
      TPid: "",
      LoadId: "",
      Tenant: "",
      Category: "",
      Subject: "",
      Overwrite: true,
      RatingPlanActivations: [],
      APIOpts: {},
    },
    validationSchema: createRatingProfileSchema,
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
            TPid: values.TPid,
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
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createRatingProfile: false });
    }
  };

  const updateRatingProfileController = useFormik({
    initialValues: {
      TPid: "",
      LoadId: "",
      Tenant: "",
      Category: "",
      Subject: "",
      Overwrite: true,
      RatingPlanActivations: [],
      APIOpts: {},
    },
    validationSchema: createRatingProfileSchema,
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
            TPid: values.TPid,
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
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateRatingProfile: false });
    }
  };

  const exports = {
    createRatingProfileController,
    updateRatingProfileController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useRatingProfiles;
