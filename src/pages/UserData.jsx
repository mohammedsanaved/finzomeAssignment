import Row from "../ui/Row";
import Heading from "../ui/Heading";
import Table from "../ui/Table";
import Button from "../ui/Button";
import { useContext, useState } from "react";
import Modal from "../ui/Modal";
import ConfirmDelete from "../ui/ConfirmDelete";
import CreateUserForm from "../components/Form/CreateUserForm";
import { EditModalContext } from "../context/EditModalProvider";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const UserData = ({ onClick, onDelete, data }) => {
  const [confirmation, setConfirmation] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const { isEditModalOpen, openEditModal } = useContext(EditModalContext);
  const [editUserId, setEditUserId] = useState(null);

  const handleDelete = (id) => {
    setDeleteUserId(id);
    setConfirmation(true);
  };

  const handleEdit = (id) => {
    console.log("id to be edited", id);
    setEditUserId(id);
    openEditModal(true);
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
                <div className="btn-gap">
                  <Button
                    variation="primary"
                    onClick={() => handleEdit(user.id)}
                  >
                    <FaRegEdit className="icon" />
                  </Button>
                  <Button
                    variation="danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    <MdDelete className="icon" />
                  </Button>
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

      {isEditModalOpen && (
        <Modal>
          <CreateUserForm editUserId={editUserId} />
        </Modal>
      )}
    </>
  );
};

export default UserData;
