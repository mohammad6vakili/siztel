import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";

const useAccounts = () => {
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
      Tenant: "cgrates.org",
      Account: "418200000069759",
      ActionPlanIDs: [],
      ActionPlansOverwrite: false,
      ActionTriggerIDs: [],
      ActionTriggerOverwrite: false,
      ExtraOptions: {},
      ReloadScheduler: false,
    },
    validationSchema: null,
    onSubmit: (values) => {
      toast.success("Success");
    },
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useAccounts;
