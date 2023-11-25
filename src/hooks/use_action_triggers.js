import { useState } from "react";

const useActionTriggers = () => {
  const [loadings, setLoadings] = useState({
    getActionTriggers: false,
    createActionTrigger: false,
    updateActionTrigger: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useActionTriggers;
