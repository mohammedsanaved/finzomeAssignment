import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalOperations = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true); // Wrap setIsOpen in a function

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalOperations;
