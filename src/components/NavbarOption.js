import { Box } from "@material-ui/core";

const NavbarOption = ({ Icon, title }) => {
  return (
    <Box style={{ display: "flex", cursor: "pointer" }} className="row">
      <Icon style={{ color: "#A6A6A6", marginRight: 10 }} />
      <h4 style={{ color: "#A6A6A6" }}>{title}</h4>
    </Box>
  );
};

export default NavbarOption;
