import { useState } from "react";
import { createActionSchema } from "../utility/schemas/index";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useFormik } from "formik";

const useActionTriggers = () => {
  const [loadings, setLoadings] = useState({
    getActionTriggers: false,
    createActionTrigger: false,
    updateActionTrigger: false,
    deleteActionTrigger: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const slots = useSelector((state) => state.actionTriggers.slots);

  const createActionTriggerController = useFormik({
    initialValues: {
      TPid: "",
      ID: "",
      Actions: [],
    },
    validationSchema: createActionSchema,
    onSubmit: (values) => {
      if (slots.length === 0) {
        toast.error("You must add at least one action trigger.");
      } else {
        // createAction(values, slots);
        toast.success("Done");
      }
    },
  });

  const exports = {
    createActionTriggerController,
    loadings,
    paginates,
    setPaginates,
  };
  return exports;
};
export default useActionTriggers;
