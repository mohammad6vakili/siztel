import { useState } from "react";

const useActions = () => {
  const [loadings, setLoadings] = useState({
    getActions: false,
    createAction: false,
    updateAction: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useActions;
