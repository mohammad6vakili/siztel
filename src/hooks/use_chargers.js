import { useState } from "react";
import { createChargerSchema } from "../utility/schemas/index";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useHttp from "./use_http";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../redux/chargers_slice";

const useChargers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { httpService } = useHttp();

  const [loadings, setLoadings] = useState({
    getChargers: false,
    getEntityById: false,
    createCharger: false,
    updateCharger: false,
    deleteEntity: false,
  });

  const [listData, setListData] = useState([]);

  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const getChargers = async () => {
    let array = [];
    try {
      setLoadings({ ...loadings, getChargers: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPChargerIDs",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setLoadings({ ...loadings, getChargers: false });
      response?.data?.result?.map((item) => {
        array.push({
          ID: item,
        });
      });
      setListData(array);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getChargers: false });
    }
  };

  const getEntityById = async (id) => {
    try {
      setLoadings({ ...loadings, getEntityById: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPCharger",
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
        navigate("/rules/chargers");
      } else {
        updateChargerController.setFieldValue("ID", response?.data?.result?.ID);
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getEntityById: false });
    }
  };

  const createChargerController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      Tenant: "",
      ID: "",
      ActivationTime: "",
      ExpiryTime: "",
      RunID: "",
      Weight: 0,
      FilterIDs: [],
      AttributeIDs: [],
    },
    validationSchema: createChargerSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      createCharger(values);
    },
  });

  const createCharger = async (values) => {
    try {
      setLoadings({ ...loadings, createCharger: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPCharger",
        params: [
          {
            TPid: selectedTpId,
            Tenant: values.Tenant,
            ID: values.ID,
            FilterIDs: values.FilterIDs,
            ActivationInterval: {
              ActivationTime: values.ActivationTime,
              ExpiryTime: values.ExpiryTime,
            },
            RunID: values.RunID,
            AttributeIDs: values.AttributeIDs,
            Weight: values.Weight,
          },
        ],
      });
      setLoadings({ ...loadings, createCharger: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/chargers");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createCharger: false });
    }
  };

  const updateChargerController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      Tenant: "",
      ID: "",
      ActivationTime: "",
      ExpiryTime: "",
      RunID: "",
      Weight: 0,
      FilterIDs: [],
      AttributeIDs: [],
    },
    validationSchema: createChargerSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      updateCharger(values);
    },
  });

  const updateCharger = async (values) => {
    try {
      setLoadings({ ...loadings, updateCharger: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPCharger",
        params: [
          {
            TPid: selectedTpId,
            Tenant: values.Tenant,
            ID: values.ID,
            FilterIDs: values.FilterIDs,
            ActivationInterval: {
              ActivationTime: values.ActivationTime,
              ExpiryTime: values.ExpiryTime,
            },
            RunID: values.RunID,
            AttributeIDs: values.AttributeIDs,
            Weight: values.Weight,
          },
        ],
      });
      setLoadings({ ...loadings, updateCharger: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/chargers");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateCharger: false });
    }
  };

  const deleteEntity = async (id) => {
    try {
      setLoadings({ ...loadings, deleteEntity: true });
      const response = await httpService.post("", {
        method: "APIerSv1.RemoveTPCharger",
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
      getChargers();
    } catch ({ err, response }) {
      setLoadings({ ...loadings, deleteEntity: false });
    }
  };

  const exports = {
    getChargers,
    getEntityById,
    createChargerController,
    updateChargerController,
    deleteEntity,
    listData,
    loadings,
  };
  return exports;
};
export default useChargers;
