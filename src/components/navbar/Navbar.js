import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, InputAdornment, Fab, Container } from "@material-ui/core";
import styles from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import NavbarList from "../NavbarList";
class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.sidebarContainer}>
        <TextField
          style={{
            margin: 10,
            backgroundColor: "#333333",
            color: "#fff",
            borderRadius: 10,
          }}
          id="filled-secondary"
          variant="outlined"
          placeholder="Search notes..."
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "#5E5E5E" }} />
              </InputAdornment>
            ),
          }}
        />
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Fab
              style={{
                backgroundColor: "#00A82E",
                color: "#FFF",
                marginRight: 10,
              }}
              size="small"
              aria-label="add"
            >
              <AddIcon />
            </Fab>
            <h4 style={{ color: "#fff", cursor: "pointer" }}>New Note</h4>
          </div>
          <NavbarList />
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
