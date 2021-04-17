import { Component } from "react";
import { removeHTMLTags } from "../../utils/helper";

import { withStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles";

class SidebarItem extends Component {
  // methods
  selectNote = (n, i) => {
    this.props.selectNote(n, i);
  };

  deleteNote = (note) => {
    if (window.confirm(`Are you sure you want to delete: ${note.title} ?`))
      this.props.deleteNote(note);
  };
  //

  render() {
    const { _index, _note, classes, selectedNoteIndex } = this.props;

    return (
      <div key={_index} onClick={() => this.selectNote(_note, _index)}>
        <ListItem
          className={classes.listItem}
          selected={selectedNoteIndex === _index}
          alignItems="flex-start"
        >
          <div className={classes.textSection}>
            <ListItemText
              primary={_note.title}
              secondary={removeHTMLTags(_note.body.substring(0, 30)) + "..."}
            />
          </div>
          <DeleteIcon
            onClick={() => this.deleteNote(_note)}
            className={classes.deleteIcon}
          />
        </ListItem>
      </div>
    );
  }
}

export default withStyles(styles)(SidebarItem);
