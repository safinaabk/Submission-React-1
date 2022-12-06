import React from "react";
import PropTypes from "prop-types";
import NoteList from "../component/NoteList";
import SearchNote from "../component/SearchNote";
import { useSearchParams } from "react-router-dom";
import { getAllNotes } from "../utils/local-data";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTitle = searchParams.get("searchTitle") || "";
  function changeSearchParams(searchTitle) {
    setSearchParams({ searchTitle });
  }

  return <HomePage defaultTitle={searchTitle} titleChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      searchTitle: props.defaultTitle || "",
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(searchTitle) {
    this.setState(() => {
      return {
        searchTitle,
      };
    });
    this.props.titleChange(searchTitle);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.searchTitle.toLowerCase());
    });
    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchNote searchTitle={this.state.searchTitle} onTitleChange={this.onSearchHandler} />
        <NoteList notes={notes} />
        <div className="homepage__action">
          <Link to="/addnote" className="action">
            <BsPlusLg />
          </Link>
        </div>
      </section>
    );
  }
}

HomePage.propTypes = {
  titleChange: PropTypes.func.isRequired,
  defaultTitle: PropTypes.string.isRequired,
};

export default HomePageWrapper;
