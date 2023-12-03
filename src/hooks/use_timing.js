import { useState } from "react";
import { createTimingSchema } from "../utility/schemas/index";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useHttp from "./use_http";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../redux/timing_slice";

const useTiming = () => {
  const dispatch = useDispatch();
  const { httpService } = useHttp();
  const navigate = useNavigate();

  const [loadings, setLoadings] = useState({
    getTimings: false,
    getEntityById: false,
    createTiming: false,
    updateTiming: false,
    deleteEntity: false,
  });

  const [listData, setListData] = useState([]);

  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const getTimings = async () => {
    let array = [];
    try {
      setLoadings({ ...loadings, getTimings: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPTimingIds",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setLoadings({ ...loadings, getTimings: false });
      response?.data?.result?.map((item) => {
        array.push({
          ID: item,
        });
      });
      setListData(array);
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getTimings: false });
    }
  };

  const getEntityById = async (id) => {
    try {
      setLoadings({ ...loadings, getEntityById: true });
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPTiming",
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
        navigate("/rules/timing");
      } else {
        updateTimingController.setFieldValue("ID", response?.data?.result?.ID);
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getEntityById: false });
    }
  };

  const createTimingController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      MonthDays: "",
      Months: "",
      Time: "",
      WeekDays: "",
      Years: "",
    },
    validationSchema: createTimingSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      createTiming(values);
    },
  });

  const createTiming = async (values) => {
    try {
      setLoadings({ ...loadings, createTiming: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPTiming",
        params: [
          {
            TPid: selectedTpId,
            ID: values.ID,
            MonthDays: values.MonthDays,
            Months: values.Months,
            Time: values.Time,
            WeekDays: values.WeekDays,
            Years: values.Years,
          },
        ],
      });
      setLoadings({ ...loadings, createTiming: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/timing");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createTiming: false });
    }
  };

  const updateTimingController = useFormik({
    initialValues: {
      TPid: selectedTpId,
      ID: "",
      MonthDays: "",
      Months: "",
      Time: "",
      WeekDays: "",
      Years: "",
    },
    validationSchema: createTimingSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      updateTiming(values);
    },
  });

  const updateTiming = async (values) => {
    try {
      setLoadings({ ...loadings, updateTiming: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPTiming",
        params: [
          {
            TPid: selectedTpId,
            ID: values.ID,
            MonthDays: values.MonthDays,
            Months: values.Months,
            Time: values.Time,
            WeekDays: values.WeekDays,
            Years: values.Years,
          },
        ],
      });
      setLoadings({ ...loadings, updateTiming: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/timing");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateTiming: false });
    }
  };

  const deleteEntity = async (id) => {
    try {
      setLoadings({ ...loadings, deleteEntity: true });
      const response = await httpService.post("", {
        method: "APIerSv1.RemoveTPTiming",
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
      getTimings();
    } catch ({ err, response }) {
      setLoadings({ ...loadings, deleteEntity: false });
    }
  };

  const exports = {
    getTimings,
    getEntityById,
    createTimingController,
    updateTimingController,
    deleteEntity,
    listData,
    loadings,
  };
  return exports;
};
export default useTiming;
