import Row from "../ui/Row";
import Heading from "../ui/Heading";
import Table from "../ui/Table";
import Button from "../ui/Button";
import { useState } from "react";
import Modal from "../ui/Modal";
import ConfirmDelete from "../ui/ConfirmDelete";
import CreateUserForm from "../components/Form/CreateUserForm";

const UserData = ({ onClick, onDelete, data }) => {
  const [confirmation, setConfirmation] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  const handleDelete = (id) => {
    setDeleteUserId(id);
    setConfirmation(true);
  };

  const handleEdit = (id) => {
    console.log("id to be edited", id);
    setEditUserId(id);
    setIsEditFormOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(deleteUserId);
    setConfirmation(false);
  };

  const handleCancelDelete = () => {
    setConfirmation(false);
  };

  // console.log("data form local storage with useState", data);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All UserData</Heading>
      </Row>
      <Row>
        <Table columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr">
          <Table.Header>
            <div>Sr.No</div>
            <div>Name</div>
            <div>Email</div>
            <div>Contact</div>
            <div>WeekDay</div>
            <div>Gender</div>
            <div>DOB</div>
            <div></div>
          </Table.Header>
          <Table.Body>
            {data.map((user, index) => (
              <Table.Row key={index}>
                <div>{index + 1}</div>
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.contact}</div>
                <div>{user.weekday},</div>
                <div>{user.gender}</div>
                <div>{user.date}</div>
                <div>
                  <button onClick={() => handleEdit(user.id)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Button size="small" onClick={onClick}>
              Add User
            </Button>
          </Table.Footer>
        </Table>
      </Row>
      {confirmation && (
        <Modal>
          <ConfirmDelete
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        </Modal>
      )}

      {isEditFormOpen && (
        <Modal>
          <CreateUserForm editUserId={editUserId} />
        </Modal>
      )}
    </>
  );
};

export default UserData;
