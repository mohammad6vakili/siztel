// ** Third Party Components
import { Sun, Moon } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTpId } from "../../../../redux/app_slice";
import Skeleton from "../../../../components/skeleton";

// ** Reactstrap Imports
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import useApp from "../../../../hooks/use_app";
import { useEffect } from "react";

const NavbarUser = (props) => {
  const dispatch = useDispatch();
  const { skin, setSkin } = props;
  const { getAllTpIds } = useApp();

  const AllTpIds = useSelector((state) => state.app.AllTpIds);
  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === "dark") {
      return <Sun className="ficon" onClick={() => setSkin("light")} />;
    } else {
      return <Moon className="ficon" onClick={() => setSkin("dark")} />;
    }
  };

  useEffect(() => {
    if (!selectedTpId) {
      getAllTpIds();
    }
  }, []);

  return (
    <ul className="nav navbar-nav align-items-center ms-auto">
      <NavItem className="d-none d-lg-block">
        <NavLink className="nav-link-style">
          <ThemeToggler />
        </NavLink>
      </NavItem>
      <UncontrolledDropdown style={{ marginLeft: 8 }}>
        {getAllTpIdsLoading ? (
          <Skeleton
            style={{
              width: 150,
              height: 38,
              borderRadius: "0.358rem",
            }}
          />
        ) : (
          <DropdownToggle caret color={skin}>
            {selectedTpId ? selectedTpId : "Select your TPId"}
          </DropdownToggle>
        )}
        <DropdownMenu skin>
          {AllTpIds?.map((item, index) => (
            <DropdownItem
              onClick={() => dispatch(setSelectedTpId(item))}
              className="w-100"
              key={index}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    </ul>
  );
};
export default NavbarUser;
