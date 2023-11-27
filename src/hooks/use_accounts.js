import { useState } from "react";

const useAccounts = () => {
  const [loadings, setLoadings] = useState({
    getAccounts: false,
    createAccount: false,
    updateAccount: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useAccounts;
