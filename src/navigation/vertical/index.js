// ** Navigation imports
// import apps from "./apps";
// import pages from "./pages";
// import forms from "./forms";
// import tables from "./tables";
// import others from "./others";
// import charts from "./charts";
// import dashboards from "./dashboards";
// import uiElements from "./ui-elements";
import HomeMenus from "./home_menus";
import ProductsMenus from "./products_menu";
import BilingsMenus from "./bilings_menus";
import SupportMenus from "./support_menus";
import NotificationsMenus from "./notifications_menus";
import DocumentsMenus from "./documents_menus";
import VpcMenus from "./vpc_menus";
import ProfileMenus from "./profile_menus";
import ApiMenus from "./api_menus";
import SshKeys from "./ssh_menus";
import VmMenus from "./vm_menus";
import FirewallMenus from "./firewall_menus";

// ** Merge & Export
export default [
  ...HomeMenus,
  ...NotificationsMenus,
  ...VpcMenus,
  ...VmMenus,
  ...FirewallMenus,
  ...ApiMenus,
  ...SshKeys,
  ...ProfileMenus,
  ...BilingsMenus,
  ...SupportMenus,
  ...ProductsMenus,
  ...DocumentsMenus,
  //   ...dashboards,
  //   ...apps,
  //   ...pages,
  //   ...uiElements,
  //   ...forms,
  //   ...tables,
  //   ...charts,
  //   ...others,
];
