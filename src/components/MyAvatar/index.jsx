import { Avatar } from "@mui/material";

const MyAvatar = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Avatar {...props} />
    </div>
  );
};

export default MyAvatar;
