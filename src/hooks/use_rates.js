import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createActionSchema } from "../utility/schemas/index";
import { setDeleteModal, setSlots } from "../redux/rates_slice";

const useRates = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getRates: false,
    getEntityById: false,
    createRate: false,
    updateRate: false,
    deleteEntity: false,
  });

  const [listData, setListData] = useState([]);

  const slots = useSelector((state) => state.rates.slots);
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const getRates = async () => {
    let array = [];
    try {
      setLoadings({ ...loadings, getRates: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPRateIds",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setLoadings({ ...loadings, getRates: false });
      response?.data?.result?.map((item) => {
        array.push({
          ID: item,
        });
      });
      setListData(array);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getRates: false });
    }
  };

  const getEntityById = async (id) => {
    try {
      setLoadings({ ...loadings, getEntityById: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPRate",
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
        navigate("/rules/rates");
      } else {
        updateRateController.setFieldValue("ID", response?.data?.result?.ID);
        dispatch(setSlots(response?.data?.result?.RateSlots));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getEntityById: false });
    }
  };

  const createRateController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      RateSlots: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one rate slot.");
      } else {
        createRate(values, slots);
      }
    },
  });

  const createRate = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, createRate: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPRate",
        params: [
          {
            TPid: selectedTpId,
            ID: values.ID,
            RateSlots: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createRate: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/rates");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createRate: false });
    }
  };

  const updateRateController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      RateSlots: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one rate slot.");
      } else {
        updateRate(values, slots);
      }
    },
  });

  const updateRate = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, updateRate: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPRate",
        params: [
          {
            TPid: selectedTpId,
            ID: values.ID,
            RateSlots: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateRate: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/rates");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateRate: false });
    }
  };

  const deleteEntity = async (id) => {
    try {
      setLoadings({ ...loadings, deleteEntity: true });
      const response = await httpService.post("", {
        method: "APIerSv1.RemoveTPRate",
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
      getRates();
    } catch ({ err, response }) {
      setLoadings({ ...loadings, deleteEntity: false });
    }
  };

  const exports = {
    getRates,
    getEntityById,
    createRateController,
    updateRateController,
    deleteEntity,
    listData,
    loadings,
  };
  return exports;
};
export default useRates;
