import { useState } from "react";

const useRates = () => {
  const [loadings, setLoadings] = useState({
    getRates: false,
    createRate: false,
    updateRate: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const [slotData, setSlotData] = useState([]);

  const exports = { loadings, paginates, setPaginates, slotData, setSlotData };
  return exports;
};
export default useRates;
