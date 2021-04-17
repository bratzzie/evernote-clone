import NavbarOption from "./NavbarOption";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

const NavbarList = () => {
  return (
    <>
      <NavbarOption title="Shortcuts" Icon={StarRoundedIcon} />
      <NavbarOption title="All Notes" Icon={AssignmentRoundedIcon} />
      <NavbarOption title="Notebooks" Icon={LibraryBooksRoundedIcon} />
      <NavbarOption title="Shared with Me" Icon={PeopleAltRoundedIcon} />
      <NavbarOption title="Tags" Icon={LocalOfferRoundedIcon} />
      <NavbarOption title="Trash" Icon={DeleteRoundedIcon} />
    </>
  );
};

export default NavbarList;
