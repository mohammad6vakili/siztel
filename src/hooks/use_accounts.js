import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import useHttp from "./use_http";
import { createAccountSchema } from "../utility/schemas/index";

const useAccounts = () => {
  const { httpService } = useHttp();

  const [loadings, setLoadings] = useState({
    getAccounts: false,
    createAccount: false,
    updateAccount: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const createAccountController = useFormik({
    initialValues: {
      Tenant: "",
      Account: "",
      ActionPlanIDs: null,
      ActionPlansOverwrite: false,
      ActionTriggerIDs: null,
      ActionTriggerOverwrite: false,
      ExtraOptions: {},
      ReloadScheduler: false,
    },
    validationSchema: createAccountSchema,
    onSubmit: (values) => {
      toast.success("Success");
    },
  });

  const createAccount = async (values) => {
    let postData = { ...values };
    try {
      setLoadings({ ...loadings, createAccount: true });
      const response = await httpService.post("", postData);
      setLoadings({ ...loadings, createAccount: false });
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createAccount: false });
    }
  };

  const exports = {
    createAccountController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useAccounts;
