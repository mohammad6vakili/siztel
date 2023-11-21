// ** React Imports
import "./styles/notifications.scss";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, FiAlertTriangle } from "react-icons/all";

// ** Custom Components
import Avatar from "@components/avatar";

import { useSkin } from "@hooks/useSkin";

// ** Third Party Components
import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Bell, X, Check, AlertTriangle } from "react-feather";

// ** Reactstrap Imports
import {
  Button,
  Badge,
  Input,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Alert,
} from "reactstrap";
import useUser from "../../../../hooks/useUser";
import { useSelector } from "react-redux";

const NotificationDropdown = () => {
  const navigate = useNavigate();
  const { skin } = useSkin();
  const { getUserNotifications, getSystemNotifications } = useUser();

  const [openMenu, setOpenMenu] = useState(false);

  const userNotifications = useSelector(
    (state) => state.user.userNotifications
  );
  const systemNotifications = useSelector(
    (state) => state.user.systemNotifications
  );

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    getUserNotifications(1);
    getSystemNotifications(1);
  }, []);

  return (
    <UncontrolledDropdown
      tag="li"
      isOpen={openMenu}
      toggle={toggleMenu}
      className="dropdown-notification nav-item me-25"
    >
      <DropdownToggle
        tag="a"
        className="nav-link"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          toggleMenu();
        }}
      >
        <Bell size={21} />
        <Badge
          pill
          style={{ minWidth: 10, minHeight: 10, right: 6, top: -3 }}
          color="danger"
          className="badge-up"
        ></Badge>
      </DropdownToggle>
      <DropdownMenu end tag="ul" className="dropdown-menu-media mt-0">
        {/* header */}
        <li className="dropdown-menu-header">
          <DropdownItem className="d-flex" tag="div" header>
            <h4 className="notification-title mb-0 me-auto w-100 text-center">
              Notifications
            </h4>
          </DropdownItem>
        </li>
        {/* body */}
        <PerfectScrollbar
          component="li"
          className="media-list scrollable-container"
          options={{
            wheelPropagation: false,
          }}
        >
          {/* user notifications */}
          {userNotifications?.length > 0 ? (
            <div className="notifications_divider">
              <AiOutlineUser />
              <span style={{ marginLeft: 5 }}>User notifications</span>
            </div>
          ) : null}
          {userNotifications.slice(0, 3).map((notif, index) => (
            <a
              key={index}
              href={"#"}
              onClick={(e) => {
                e.preventDefault();
                toggleMenu();
                navigate(
                  `/notifications/view?notification_id=${notif?.uuid}&notification_type=user`
                );
              }}
            >
              <div
                className={`notifications_item ${
                  skin === "dark" ? "notifications_item_dark" : ""
                } border-bottom`}
              >
                <div>
                  <Alert
                    color={notif.show_type}
                    style={{
                      margin: 0,
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                    }}
                  >
                    <div
                      style={{ width: "100%", height: "100%" }}
                      className="alert-body"
                    ></div>
                  </Alert>
                </div>
                <div>
                  <div>
                    <span>{notif.title}</span>
                    <small>
                      {notif.body.length > 55
                        ? notif.body.slice(0, 55) + "..."
                        : notif.body}
                    </small>
                  </div>
                  <div>{notif.created_at}</div>
                </div>
              </div>
            </a>
          ))}
          {/* system notifications */}
          {systemNotifications?.length > 0 ? (
            <div className="notifications_divider">
              <FiAlertTriangle />
              <span style={{ marginLeft: 5 }}>System notifications</span>
            </div>
          ) : null}
          {systemNotifications.slice(0, 3).map((notif, index) => (
            <a
              key={index}
              href={"#"}
              onClick={(e) => {
                e.preventDefault();
                toggleMenu();
                navigate(
                  `/notifications/view?notification_id=${notif?.uuid}&notification_type=system`
                );
              }}
            >
              <div
                className={`notifications_item ${
                  skin === "dark" ? "notifications_item_dark" : ""
                } border-bottom`}
              >
                <div>
                  <Alert
                    color={notif.show_type}
                    style={{
                      margin: 0,
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                    }}
                  >
                    <div
                      style={{ width: "100%", height: "100%" }}
                      className="alert-body"
                    ></div>
                  </Alert>
                </div>
                <div>
                  <div>
                    <span>{notif.title}</span>
                    <small>
                      {notif.body.length > 55
                        ? notif.body.slice(0, 55) + "..."
                        : notif.body}
                    </small>
                  </div>
                  <div>{notif.created_at}</div>
                </div>
              </div>
            </a>
          ))}
        </PerfectScrollbar>
        {/* all notifications */}
        <li className="dropdown-menu-footer">
          <Button
            onClick={() => {
              toggleMenu();
              navigate("/notifications");
            }}
            color="primary"
            block
          >
            Read all notifications
          </Button>
        </li>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default NotificationDropdown;
