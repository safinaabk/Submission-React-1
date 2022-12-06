import React from "react";
import PropTypes from "prop-types";
import DetailNote from "../component/DetailNote";
import { deleteNote, getNote } from "../utils/local-data";
import { useParams, useNavigate } from "react-router-dom";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  function onDeleteButtHandler(id) {
    deleteNote(id);
    navigate("/");
  }

  return <DetailNotePage id={id} onDeleteButt={onDeleteButtHandler} />;
}

class DetailNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };
  }

  render() {
    if (this.state.note === undefined) {
      return <p>Notes is not found!</p>;
    }
    return (
      <section className="detail-page">
        <DetailNote {...this.state.note} onDeleteButt={deleteNote} />
      </section>
    );
  }
}

DetailNotePage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailPageWrapper;
