import { useContext, useEffect, useState } from "react";
import CreateUserForm from "./components/Form/CreateUserForm.jsx";
import UserData from "./pages/UserData.jsx";
import GlobalStyle from "./styles/GlobalStyles.js";
import styled from "styled-components";
import Modal from "./ui/Modal.jsx";
import { ModalContext } from "./context/ModalOperations.jsx";
// import ConfirmDelete from "./ui/ConfirmDelete.jsx";
import { ConfirmDeleteContext } from "./context/ConfirmDeleteProvider.jsx";
// import ConfirmDelete from "./ui/ConfirmDelete.jsx";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

function App() {
  // const { isOpen, open } = useContext(ModalContext);
  const { closeDelete } = useContext(ConfirmDeleteContext);
  const [data, setData] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const { isOpen, open } = useContext(ModalContext);

  const toggleFormVisibility = (user) => {
    // If user is provided, set it to edit mode
    setEditUser(user);
    open();
  };

  const handleDeleteUser = (id) => {
    // Filter out the user with the specified id
    console.log("id to be deleted", id);
    const updatedUserData = data.filter((user) => user.id !== id);
    setData(updatedUserData);
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
    closeDelete(); // Close the confirmation modal after deletion
  };

  const userData = () => {
    try {
      const userDataFromLocalStorage = localStorage.getItem("userData");
      if (userDataFromLocalStorage) {
        const parsedUserData = JSON.parse(userDataFromLocalStorage);
        setData(parsedUserData);
        console.log("Updated data from LS", userDataFromLocalStorage);
      }
    } catch (error) {
      console.error("Error fetching or parsing user data:", error);
    }
  };
  // userData();
  useEffect(() => {
    const fetchData = () => {
      userData(); // Call the function to update data
    };

    fetchData();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Container>
        {/* <button onClick={open}>Add</button> */}
        <UserData
          onClick={() => toggleFormVisibility(null)}
          onDelete={handleDeleteUser}
          data={data}
        />

        {isOpen && (
          <Modal>
            <CreateUserForm userData={userData} editUser={editUser} />
          </Modal>
        )}
      </Container>
    </>
  );
}

export default App;
