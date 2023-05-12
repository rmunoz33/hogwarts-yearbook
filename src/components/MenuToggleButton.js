import MenuBookIcon from "@material-ui/icons/MenuBook";

const MenuToggleButton = (props) => {
  return (
    <div className="drawer-toggle" onClick={() => props.handleDrawerClick()}>
      <MenuBookIcon fontSize="large" />
    </div>
  );
};

export default MenuToggleButton;
