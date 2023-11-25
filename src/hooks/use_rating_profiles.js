import { useState } from "react";

const useRatingProfiles = () => {
  const [loadings, setLoadings] = useState({
    getRatingProfiles: false,
    createRatingProfile: false,
    updateRatingProfile: false,
  });

  const [paginates, setPaginates] = useState({
    current: 1,
    total: 1,
  });

  const exports = { loadings, paginates, setPaginates };
  return exports;
};
export default useRatingProfiles;
