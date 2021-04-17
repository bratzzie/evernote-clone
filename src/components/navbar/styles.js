const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  sidebarContainer: {
    marginTop: "0px",
    paddingTop: "20px",
    minHeight: "100vh",
    width: "300px",
    height: "100%",
    boxSizing: "border-box",
    float: "left",
    overflowY: "scroll",
    overflowX: "hidden",
    backgroundColor: "#000",
    scrollbarWidth: "none",
  },
});

export default styles;
