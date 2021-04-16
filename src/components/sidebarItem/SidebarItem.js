import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { ListItem, ListItemText } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../../utils/helper";

class SidebarItem extends Component {
  render() {
    return <div></div>;
  }
}

export default withStyles(styles)(SidebarItem);
