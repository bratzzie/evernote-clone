import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ReactQuill from "react-quill";
import debounce from "../../utils/helper";

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: "",
    };
  }
  update = debounce(() => {
    console.log("You are typing...");
  }, 1500);

  updateBody = async (value) => {
    await this.setState({ text: value });
    this.update();
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.editorContainer}>
        <ReactQuill
          value={this.state.text}
          onChange={this.updateBody}
        ></ReactQuill>
      </div>
    );
  }
}

export default withStyles(styles)(Editor);
