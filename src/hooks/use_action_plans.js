import { useState } from "react";

const useActionPlans = () => {
  const [loadings, setLoadings] = useState({
    getActionPlans: false,
    createActionPlan: false,
    updateActionPlan: false,
    deleteActionPlan: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const slots = useSelector((state) => state.actionPlans.slots);

  const createActionPlanController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one action.");
      } else {
        createActionPlan(values, slots);
      }
    },
  });

  const createActionPlan = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, createAction: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPActionPlan",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            ActionPlan: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, createAction: false });
      if (response.status === 200) {
        toast.success("Successfully Created!");
        navigate("/rules/action_plans");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, createAction: false });
    }
  };

  const updateActionPlanController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one action.");
      } else {
        updateActionPlan(values, slots);
      }
    },
  });

  const updateActionPlan = async (values, slots) => {
    const newSlots = slots.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    try {
      setLoadings({ ...loadings, updateAction: true });
      const response = await httpService.post("", {
        method: "APIerSv1.SetTPActionPlan",
        params: [
          {
            TPid: values.TPid,
            ID: values.ID,
            ActionPlan: newSlots,
          },
        ],
      });
      setLoadings({ ...loadings, updateAction: false });
      if (response.status === 200) {
        toast.success("Successfully Updated!");
        navigate("/rules/action_plans");
      }
    } catch ({ err, response }) {
      setLoadings({ ...loadings, updateAction: false });
    }
  };

  const exports = {
    createActionPlanController,
    updateActionPlanController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useActionPlans;
