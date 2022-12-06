import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import DeleteNote from "./DeleteNote";

function DetailNote({ id, title, createdAt, body, onDeleteButt }) {
  return (
    <div>
      <h2 className="detail-page__title">{title}</h2>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
      <div className="detail-page__action">
        <DeleteNote id={id} onDeleteButt={onDeleteButt} />
      </div>
    </div>
  );
}

DetailNote.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDeleteButt: PropTypes.func.isRequired,
};

export default DetailNote;
