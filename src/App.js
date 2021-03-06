import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Editor from "./components/editor/Editor";

import "./App.css";
import { db } from "./firebase";
import firebase from "firebase";
import Navbar from "./components/navbar/Navbar";

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

  noteUpdate = (id, noteObj) => {
    db.collection("notes").doc(id).update({
      title: noteObj.title,
      body: noteObj.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  selectNote = (note, index) => {
    this.setState({ selectedNoteIndex: index, selectedNote: note });
  };

  newNote = async (title) => {
    const note = {
      title, //title: title
      body: "",
    };

    const newFromDB = await db.collection("notes").add({
      title: note.title,
      body: note.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    const newID = newFromDB.id;
    await this.setState({ notes: [...this.state.notes, note] });
    const newNoteIndex = this.state.notes.indexOf(
      this.state.notes.filter((_note) => _note.id === newID)[0]
    );
    this.setState({
      selectedNote: this.state.notes[newNoteIndex],
      selectedNoteIndex: newNoteIndex,
    });
  };

  deleteNote = async (note) => {
    const noteIndex = this.state.notes.indexOf(note);
    await this.setState({
      notes: this.state.notes.filter((_note) => _note !== note),
    });

    if (this.state.selectedNoteIndex === noteIndex) {
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    } else if (this.state.notes.length >= 1) {
      this.state.selectedNoteIndex < noteIndex
        ? this.selectNote(
            this.state.notes[this.state.selectedNoteIndex],
            this.state.selectedNoteIndex
          )
        : this.selectNote(
            this.state.notes[this.state.selectedNoteIndex - 1],
            this.state.selectedNoteIndex - 1
          );
    } else {
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    }

    db.collection("notes").doc(note.id).delete();
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        <Navbar
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        />
        <Sidebar
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}
        />
        {this.state.selectedNote ? (
          <Editor
            selectedNote={this.state.selectedNote}
            selectedNoteIndex={this.state.selectedNoteIndex}
            notes={this.state.notes}
            noteUpdate={this.noteUpdate}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
