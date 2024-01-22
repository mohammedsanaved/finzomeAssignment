import { createContext, useState } from "react";

export const EditModalContext = createContext();

const EditModalProvider = ({ children }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  return (
    <EditModalContext.Provider
      value={{ isEditModalOpen, openEditModal, closeEditModal }}
    >
      {children}
    </EditModalContext.Provider>
  );
};

export default EditModalProvider;
