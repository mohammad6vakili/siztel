import { useState } from "react";

const useChargers = () => {
  const [loadings, setLoadings] = useState({
    getChargers: false,
    createCharger: false,
    updateCharger: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useChargers;
