import { useState } from "react";

const useActionPlans = () => {
  const [loadings, setLoadings] = useState({
    getActionPlans: false,
    createActionPlan: false,
    updateActionPlan: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useActionPlans;
