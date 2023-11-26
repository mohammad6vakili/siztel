import { useState } from "react";

const useInvoice = () => {
  const [loadings, setLoadings] = useState({
    getInvoices: false,
    createInvoice: false,
    updateInvoice: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useInvoice;
