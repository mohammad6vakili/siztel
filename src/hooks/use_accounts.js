import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import useHttp from "./use_http";
import { useNavigate } from "react-router-dom";
import { createAccountSchema } from "../utility/schemas/index";
import { useSelector } from "react-redux";

const useAccounts = () => {
  const navigate = useNavigate();
  const { httpService } = useHttp();

  const [loadings, setLoadings] = useState({
    getAccounts: false,
    createAccount: false,
    updateAccount: false,
    createBalance: false,
    deleteAccount: false,
  });

  const [getActionPlansLoading, setGetActionPlansLoading] = useState(false);
  const [getActionTriggersLoading, setGetActionTriggersLoading] =
    useState(false);

  const [actionPlans, setGetActionPlans] = useState([]);
  const [actionTriggers, setGetActionTriggers] = useState([]);

  const [filters, setFilters] = useState({
    Tenant: "cgrates.org",
  });

  const [listData, setListData] = useState([]);

  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const getActionPlans = async () => {
    let array = [];
    try {
      setGetActionPlansLoading(true);
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPActionPlanIds",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setGetActionPlansLoading(false);
      response?.data?.result?.map((item) => {
        array.push({
          label: item,
          value: item,
        });
      });
      setGetActionPlans(array);
    } catch ({ err, response }) {
      setGetActionPlansLoading(false);
    }
  };

  const getActionTriggers = async () => {
    let array = [];
    try {
      setGetActionTriggersLoading(true);
      const response = await httpService.post("", {
        method: "APIerSv1.GetTPActionTriggerIds",
        params: [
          {
            TPid: selectedTpId,
          },
        ],
      });
      setGetActionTriggersLoading(false);
      response?.data?.result?.map((item) => {
        array.push({
          label: item,
          value: item,
        });
      });
      setGetActionTriggers(array);
    } catch ({ err, response }) {
      setGetActionTriggersLoading(false);
    }
  };

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
      Balances: null,
    },
    validationSchema: createAccountSchema,
    onSubmit: (values) => {
      createAccount(values);
    },
  });

  const createAccount = async (values) => {
    let postData = {
      Tenant: values.Tenant,
      Account: values.Account,
      ActionPlanIDs: [values.ActionPlanIDs.value],
      ActionPlansOverwrite: false,
      ActionTriggerIDs: [values.ActionTriggerIDs.value],
      ActionTriggerOverwrite: false,
      ExtraOptions: {},
      ReloadScheduler: false,
    };
    try {
      setLoadings({ ...loadings, createAccount: true });
      const response = await httpService.post("", {
        method: "APIerSv2.SetAccount",
        params: [postData],
      });
      setLoadings({ ...loadings, createAccount: false });
      if (response.status === 200) {
        createBalance(values);
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createAccount: false });
    }
  };

  const createBalance = async (values) => {
    try {
      setLoadings({ ...loadings, createBalance: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetBalances",
        params: [
          {
            Tenant: values.Tenant,
            Account: values.Account,
            Balances: [values.Balances.value],
          },
        ],
        id: 6,
      });
      setLoadings({ ...loadings, createBalance: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/admin/accounts");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createBalance: false });
    }
  };

  const getAccounts = async (without_filter) => {
    let postData = {
      Tenant: "",
    };
    if (filters.Tenant.length > 0 && !without_filter) {
      postData.Tenant = filters.Tenant;
    }
    try {
      setLoadings({ ...loadings, getAccounts: true });
      const response = await httpService.post("", {
        method: "APIerSv2.GetAccounts",
        params: [postData],
      });
      setLoadings({ ...loadings, getAccounts: false });
      if (response.data.result) {
        setListData(response.data.result);
      } else {
        setListData([]);
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, getAccounts: false });
    }
  };

  const exports = {
    getAccounts,
    getActionPlans,
    getActionTriggers,
    createAccountController,
    listData,
    loadings,
    actionPlans,
    actionTriggers,
    getActionPlansLoading,
    getActionTriggersLoading,
    filters,
    setFilters,
  };
  return exports;
};
export default useAccounts;
