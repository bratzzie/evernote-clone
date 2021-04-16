import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Editor from "./components/editor/Editor";

import "./App.css";
import { db } from "./firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
    };
  }
  componentDidMount = () => {
    db.collection("notes").onSnapshot((serverUpdate) => {
      const notes = serverUpdate.docs.map((_doc) => {
        const data = _doc.data();
        data["id"] = _doc.id;
        return data;
      });
      console.log(notes);
      this.setState({ notes });
    }); // every update in collection arg function in onsnapshot will be called
  };

  render() {
    return (
      <>
        <Sidebar
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
        />
        <Editor />
      </>
    );
  }
}

export default App;
