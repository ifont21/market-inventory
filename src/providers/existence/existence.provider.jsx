import React, { createContext, useState } from "react";
import { fetchInventoryByCategories } from "../../services/http-inventory.service";

const initialStates = {
  EXISTENCE: {
    current: null,
    error: null,
    isLoading: false,
  },
};

export const ExistenceContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  existence: initialStates.EXISTENCE,
  fetchInventory: () => {},
});

const ExistenceProvider = ({ children }) => {
  const [hidden, setDialogHidden] = useState(true);
  const setToogleHiddenDialog = () => setDialogHidden(!hidden);

  const [existence, setCurrentExistence] = useState(initialStates.EXISTENCE);

  const fetchInventory = () => {
    setCurrentExistence({
      ...existence,
      isLoading: true,
    });

    fetchInventoryByCategories()
      .then((response) => response.json())
      .then((inventory) =>
        setCurrentExistence({
          ...existence,
          isLoading: false,
          current: inventory,
        })
      )
      .catch((error) =>
        setCurrentExistence({
          ...existence,
          isLoading: false,
          error,
        })
      );
  };

  return (
    <ExistenceContext.Provider
      value={{ hidden, setToogleHiddenDialog, existence, fetchInventory }}
    >
      {children}
    </ExistenceContext.Provider>
  );
};

export default ExistenceProvider;
