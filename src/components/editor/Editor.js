import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ReactQuill from "react-quill";
import debounce from "../../utils/helper";
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded";
import { Box } from "@material-ui/core";
class Editor extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: "",
    };
  }

  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
    });
  };

  componentDidUpdate = () => {
    if (this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id,
      });
    }
  };

  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.text,
    });
  }, 1500);

  updateBody = async (text) => {
    await this.setState({ text });
    this.update();
  };

  updateTitle = async (title) => {
    await this.setState({ title });
    this.update();
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.editorContainer}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            borderLeft: "1px solid #CCCCCC",
          }}
        >
          <LibraryBooksRoundedIcon
            style={{ color: "#A6A6A6", marginLeft: 15 }}
          />
          <input
            className={classes.titleInput}
            placeholder="Note title..."
            value={this.state.title ? this.state.title : ""}
            onChange={(e) => this.updateTitle(e.target.value)}
          />
        </Box>

        <ReactQuill
          value={this.state.text}
          onChange={this.updateBody}
          style={{
            width: "100%",
          }}
        ></ReactQuill>
      </div>
    );
  }
}

export default withStyles(styles)(Editor);
