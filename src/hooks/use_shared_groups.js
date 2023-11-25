import { useState } from "react";

const useSharedGroups = () => {
  const [loadings, setLoadings] = useState({
    getSharedGroups: false,
    createSharedGroup: false,
    updateSharedGroup: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useSharedGroups;
