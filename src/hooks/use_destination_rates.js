import { useState } from "react";

const useDestinationRates = () => {
  const [loadings, setLoadings] = useState({
    getDestinationRates: false,
    createDestinationRate: false,
    updateDestinationRate: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useDestinationRates;
