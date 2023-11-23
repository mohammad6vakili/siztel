import { useState } from "react";

const useDestinations = () => {
  const [loadings, setLoadings] = useState({
    getDestinations: false,
    createDestination: false,
    updateDestination: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useDestinations;
