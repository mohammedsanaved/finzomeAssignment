import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
// import { useContext } from "react";
// import { ConfirmDeleteContext } from "../context/ConfirmDeleteProvider";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ onConfirm, onCancel }) {
  // function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  // const { closeDelete } = useContext(ConfirmDeleteContext);

  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete User Data</Heading>
      <p>
        Are you sure you want to delete this user data permanently? This action
        cannot be undone.
      </p>
      <div>
        <Button variation="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variation="danger" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
