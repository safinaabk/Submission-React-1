import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";

function DeleteNote({ id, onDeleteButt }) {
  const navigate = useNavigate();
  return (
    <button
      className="action"
      title="Hapus"
      onClick={() => {
        onDeleteButt(id);
        navigate("/");
      }}
    >
      <BsFillTrashFill />
    </button>
  );
}

DeleteNote.propTypes = {
  id: PropTypes.string.isRequired,
  onDeleteButt: PropTypes.func.isRequired,
};

export default DeleteNote;
