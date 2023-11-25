import { useState } from "react";

const useRatingPlans = () => {
  const [loadings, setLoadings] = useState({
    getRatingPlans: false,
    createRatingPlan: false,
    updateRatingPlan: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useRatingPlans;
