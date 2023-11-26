import { useState } from "react";

const useCdr = () => {
  const [loadings, setLoadings] = useState({
    getCdr: false,
    createCdr: false,
    updateCdr: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useCdr;
