import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { List, Divider, Button } from "@material-ui/core";
import styles from "./styles";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null,
    };
  }

  newNoteBtnClick = () => {
    this.setState({ title: null, addingNote: !this.state.addingNote });
  };

  updateTitle = (title) => {
    this.setState({ title });
  };

  newNote = () => {
    console.log("Created!");
  };
  render() {
    const { notes, classes, selectedNoteIndex } = this.props;
    return (
      <div className={classes.sidebarContainer}>
        <Button onClick={this.newNoteBtnClick} className={classes.newNoteBtn}>
          {this.state.addingNote ? "Cancel" : "New Note"}
        </Button>
        {this.state.addingNote ? (
          <div>
            <input
              type="text"
              className={classes.newNoteInput}
              placeholder="Enter note title"
              onKeyUp={(e) => this.updateTitle(e.target.value)}
            />
            <Button className={classes.newNoteSubmitBtn} onClick={this.newNote}>
              Submit Note
            </Button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
