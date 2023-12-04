import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "./use_http";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createActionSchema } from "../utility/schemas/index";
import { setDeleteModal, setSlots } from "../redux/destination_rates_slice";

const useDestinationRates = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getDestinationRates: false,
    getEntityById: false,
    createDestinationRate: false,
    updateDestinationRate: false,
    deleteEntity: false,
  });

  const [listData, setListData] = useState([]);

  const slots = useSelector((state) => state.destinationRates.slots);
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const getDestinationRates = async () => {
    let array = [];
    try {
      setLoadings({ ...loadings, getDestinationRates: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPDestinationRateIds",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setLoadings({ ...loadings, getDestinationRates: false });
      response?.data?.result?.map((item) => {
        array.push({
          ID: item,
        });
      });
      setListData(array);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getDestinationRates: false });
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
        navigate("/rules/destination_rates");
      } else {
        updateDestinationRateController.setFieldValue(
          "ID",
          response?.data?.result?.ID
        );
        dispatch(setSlots(response?.data?.result?.DestinationRates));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getEntityById: false });
    }
  };

  const createDestinationRateController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      DestinationRates: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one destination rate.");
      } else {
        createDestinationRate(values, slots);
      }
    },
  });

  const createDestinationRate = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, createDestinationRate: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPDestinationRate",
        params: [
          {
            TPid: selectedTpId,
            ID: values.ID,
            DestinationRates: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createDestinationRate: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/destination_rates");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createDestinationRate: false });
    }
  };

  const updateDestinationRateController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      DestinationRates: [],
    },
    validationSchema: createActionSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one destination rate.");
      } else {
        updateDestinationRate(values, slots);
      }
    },
  });

  const updateDestinationRate = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, updateDestinationRate: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPDestinationRate",
        params: [
          {
            TPid: selectedTpId,
            ID: values.ID,
            DestinationRates: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateDestinationRate: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/destination_rates");
        dispatch(setSlots([]));
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateDestinationRate: false });
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
      getDestinationRates();
    } catch ({ err, response }) {
      setLoadings({ ...loadings, deleteEntity: false });
    }
  };

  const exports = {
    getDestinationRates,
    getEntityById,
    createDestinationRateController,
    updateDestinationRateController,
    deleteEntity,
    listData,
    loadings,
  };
  return exports;
};
export default useDestinationRates;
