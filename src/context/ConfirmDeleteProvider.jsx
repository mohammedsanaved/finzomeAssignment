// ConfirmDeleteContext.jsx
import { createContext, useState } from "react";

export const ConfirmDeleteContext = createContext();

const ConfirmDeleteProvider = ({ children }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const openDelete = () => {
    setIsDeleteOpen(true);
  };

  const closeDelete = () => {
    setIsDeleteOpen(false);
  };

  return (
    <ConfirmDeleteContext.Provider
      value={{
        isDeleteOpen,
        openDelete,
        closeDelete,
      }}
    >
      {children}
    </ConfirmDeleteContext.Provider>
  );
};
export default ConfirmDeleteProvider;
