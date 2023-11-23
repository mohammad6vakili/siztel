import { useState } from "react";

const useTiming = () => {
  const [loadings, setLoadings] = useState({
    getTimings: false,
    createTiming: false,
    updateTiming: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useTiming;
