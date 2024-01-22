// import { EditModalContext } from "../../context/EditModalContext";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FromRow from "../../ui/FormRow";
import styled from "styled-components";
import Input from "../../ui/Input";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalOperations";
import { EditModalContext } from "../../context/EditModalProvider";

const SelectorContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  input {
    margin-right: 0.5rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  color: ${(props) => (props.error ? "red" : "inherit")};
`;

const CreateUserForm = ({
  isModalOpen,
  editUserId,
  onCloseModal,
  editUser,
}) => {
  const { close: closeAddUserModal } = useContext(ModalContext);
  const { isEditModalOpen, openEditModal, closeEditModal } =
    useContext(EditModalContext);
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    email: "",
    contact: "",
    weekday: [],
    gender: "",
    date: "",
  });
  useEffect(() => {
    // Set formData to editUser data when editUserId changes
    if (editUserId) {
      // Retrieve existing data from localStorage
      const storedData = JSON.parse(localStorage.getItem("userData")) || [];

      // Find the user with the given editUserId
      const userToEdit = storedData.find((user) => user.id === editUserId);

      // If userToEdit is found, set formData to its values
      if (userToEdit) {
        setFormData(userToEdit);
      }
    }
  }, [editUserId]);
  // const [errors, setErrors] = useState({});

  const onSubmit = () => {
    // Assuming you want to save each form submission as an array of objects
    // Retrieve existing data from localStorage
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];

    // Check if the current form data already exists in the stored data
    const isExistingUser = storedData.some((user) => user.id === formData.id);

    // Create a new object representing the current form submission
    const newFormData = {
      id: isExistingUser ? formData.id : Date.now(),
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      weekday: formData.weekday,
      gender: formData.gender,
      date: formData.date,
    };

    // Update the stored data with the new form submission
    const updatedData = isExistingUser
      ? storedData.map((user) => (user.id === formData.id ? newFormData : user))
      : [...storedData, newFormData];

    // Update LocalStorage with the latest form data
    localStorage.setItem("userData", JSON.stringify(updatedData));

    // Close the modal
    closeAddUserModal();
    closeEditModal();

    console.log("Form Data Submitted:", newFormData);
    console.log("Form data stored in LocalStorage:", updatedData);
  };
  const handleCancel = () => {
    console.log("Form Canceled Clicked");

    if (editUserId) {
      // If it's the edit modal, close the edit modal
      closeEditModal();
    } else {
      // If it's the add user modal, close the add user modal
      closeAddUserModal();
    }
  };

  return (
    <>
      {!isModalOpen && (
        <Form onSubmit={(e) => e.preventDefault()}>
          <FromRow>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {/* {errors.name && <span style={{ color: "red" }}>{errors.name}</span>} */}
          </FromRow>
          <FromRow>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {/* {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )} */}
          </FromRow>
          <FromRow>
            <Label htmlFor="contact">Contact</Label>
            <Input
              type="tel"
              id="contact"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />
            {/* {errors.contact && (
              <span style={{ color: "red" }}>{errors.contact}</span>
            )} */}
          </FromRow>
          <FromRow>
            <Label htmlFor="weekday">Weekday</Label>
            <SelectorContainer>
              <Input
                type="checkbox"
                id="monday"
                value="Monday"
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    weekday: e.target.checked
                      ? [...prevData.weekday, e.target.value]
                      : prevData.weekday.filter(
                          (day) => day !== e.target.value
                        ),
                  }))
                }
              />
              <Label htmlFor="monday">Monday</Label>
              <Input
                type="checkbox"
                id="tuesday"
                value="Tuesday"
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    weekday: e.target.checked
                      ? [...prevData.weekday, e.target.value]
                      : prevData.weekday.filter(
                          (day) => day !== e.target.value
                        ),
                  }))
                }
              />
              <Label htmlFor="Tuesday">Tuesday</Label>
              <Input
                type="checkbox"
                id="wednesday"
                value="wednesday"
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    weekday: e.target.checked
                      ? [...prevData.weekday, e.target.value]
                      : prevData.weekday.filter(
                          (day) => day !== e.target.value
                        ),
                  }))
                }
              />
              <Label htmlFor="wednesday">Wednesday</Label>
              <Input
                type="checkbox"
                id="thursday"
                value="thursday"
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    weekday: e.target.checked
                      ? [...prevData.weekday, e.target.value]
                      : prevData.weekday.filter(
                          (day) => day !== e.target.value
                        ),
                  }))
                }
              />
              <Label htmlFor="thursday">Thursday</Label>
              <Input
                type="checkbox"
                id="friday"
                value="friday"
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    weekday: e.target.checked
                      ? [...prevData.weekday, e.target.value]
                      : prevData.weekday.filter(
                          (day) => day !== e.target.value
                        ),
                  }))
                }
              />
              <Label htmlFor="friday">Friday</Label>
            </SelectorContainer>
            {/* {errors.weekday && (
              <span style={{ color: "red" }}>{errors.weekday}</span>
            )} */}
          </FromRow>
          <FromRow>
            <Label htmlFor="gender">Gender</Label>
            <SelectorContainer>
              <Input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
              <Label htmlFor="male">Male</Label>
              <Input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
              <Label htmlFor="female">Female</Label>
            </SelectorContainer>
            {/* {errors.gender && (
              <span style={{ color: "red" }}>{errors.gender}</span>
            )} */}
          </FromRow>
          <FromRow>
            <Label htmlFor="date">Date Of Birth</Label>
            <Input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
            {/* {errors.date && <span style={{ color: "red" }}>{errors.date}</span>} */}
          </FromRow>

          <FromRow>
            <Button variation="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={onSubmit}>
              {editUserId ? "Update" : "Submit"}
              {/* Change button text based on whether it's an update or submit */}
            </Button>
          </FromRow>
        </Form>
      )}
    </>
  );
};

export default CreateUserForm;
