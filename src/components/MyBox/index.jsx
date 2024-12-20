import { Box } from "@mui/material";

const MyBox = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default MyBox;
