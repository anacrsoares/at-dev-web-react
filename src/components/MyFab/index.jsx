import { Fab, Avatar } from "@mui/material";
import cart from "../../assets/img/cart.png";

export default function MyFab({ props, children }) {
  return <Fab {...props}>{children}</Fab>;
}
