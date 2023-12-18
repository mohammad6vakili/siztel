import { useState } from "react";
import { createDestinationSchema } from "../utility/schemas/index";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useHttp from "./use_http";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../redux/destinations_slice";

const useDestinations = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getDestinations: false,
    getEntityById: false,
    createDestination: false,
    updateDestination: false,
    deleteEntity: false,
  });

  const [listData, setListData] = useState([]);

  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const getDestinations = async () => {
    let array = [];
    try {
      setLoadings({ ...loadings, getDestinations: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPDestinationIDs",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setLoadings({ ...loadings, getDestinations: false });
      response?.data?.result?.map((item) => {
        array.push({
          ID: item,
        });
      });
      setListData(array);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getDestinations: false });
    }
  };

  const getEntityById = async (id) => {
    try {
      setLoadings({ ...loadings, getEntityById: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPDestination",
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
        navigate("/rules/destinations");
      } else {
        updateDestinationController.setFieldValue(
          "ID",
          response?.data?.result?.ID
        );
        updateDestinationController.setFieldValue(
          "Prefixes",
          response?.data?.result?.Prefixes
        );
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getEntityById: false });
    }
  };

  const createDestinationController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      Prefixes: [],
    },
    validationSchema: createDestinationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      createDestination(values);
    },
  });

  const createDestination = async (values) => {
    try {
      setLoadings({ ...loadings, createDestination: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPDestination",
        params: [
          {
            TPid: selectedTpId,
            ID: values.ID,
            Prefixes: values.Prefixes,
          },
        ],
      });
      setLoadings({ ...loadings, createDestination: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/destinations");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createDestination: false });
    }
  };

  const updateDestinationController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      Prefixes: [],
    },
    validationSchema: createDestinationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      updateDestination(values);
    },
  });

  const updateDestination = async (values) => {
    try {
      setLoadings({ ...loadings, updateDestination: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPDestination",
        params: [
          {
            TPid: selectedTpId,
            ID: values.ID,
            Prefixes: values.Prefixes,
          },
        ],
      });
      setLoadings({ ...loadings, updateDestination: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/destinations");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateDestination: false });
    }
  };

  const deleteEntity = async (id) => {
    try {
      setLoadings({ ...loadings, deleteEntity: true });
      const response = await httpService.post("", {
        method: "APIerSv1.RemoveTPDestination",
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
      getDestinations();
    } catch ({ err, response }) {
      setLoadings({ ...loadings, deleteEntity: false });
    }
  };

  const exports = {
    getDestinations,
    getEntityById,
    createDestinationController,
    updateDestinationController,
    deleteEntity,
    listData,
    loadings,
  };
  return exports;
};
export default useDestinations;
