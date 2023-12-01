import { useState } from "react";
import { createChargerSchema } from "../utility/schemas/index";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useHttp from "./use_http";

const useDestinations = () => {
  const navigate = useNavigate();
  const { httpService } = useHttp();
  const [loadings, setLoadings] = useState({
    getDestinations: false,
    createDestination: false,
    updateDestination: false,
    deleteDestination: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const createDestinationController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      Prefixes: [],
    },
    validationSchema: null,
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
            TPid: values.TPid,
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
      TPid: "",
      ID: "",
      Prefixes: [],
    },
    validationSchema: null,
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
            TPid: values.TPid,
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

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useDestinations;
