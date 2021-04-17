const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    boxShadow: "0px 0px 2px black",
  },
  titleInput: {
    height: "50px",
    boxSizing: "border-box",
    border: "none",
    padding: "5px",
    fontSize: "24px",
    width: "calc(100%)",
    backgroundColor: "#fff",
    color: "#A6A6A6",
    paddingLeft: "10px",
  },
  editorContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
    minHeight: "100vh",
    boxSizing: "border-box",
  },
});

export default styles;
