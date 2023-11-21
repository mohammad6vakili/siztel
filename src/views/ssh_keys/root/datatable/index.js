// import { MdOutlineCloudDone } from "react-icons/all";
// import ContextButton from "../components/context_button";

// export const columns = [
//   {
//     name: "Actions",
//     minWidth: "80px",
//     maxWidth: "80px",
//     selector: (row) => row.uuid,
//     cell: (row) => {
//       return <ContextButton row={row} />;
//     },
//   },
//   {
//     name: "Title",
//     minWidth: "180px",
//     selector: (row) => row.title,
//   },
//   {
//     name: "Status",
//     minWidth: "120px",
//     selector: (row) => row.status_readable,
//   },
//   {
//     name: "Default key",
//     minWidth: "120px",
//     selector: (row) => row.default,
//     cell: (row) => {
//       if (row?.default == 1) {
//         return <MdOutlineCloudDone size={20} color="#26C76F" />;
//       } else {
//         return "";
//       }
//     },
//   },
//   {
//     name: "Created at",
//     minWidth: "200px",
//     selector: (row) => row.created_at,
//   },
// ];
