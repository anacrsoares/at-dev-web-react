import { TextField } from "@mui/material";

const TextFieldComponent = (props) => {
  const { variant = "outlined", className = "", ...otherProps } = props;

  return (
    <TextField
      className={`general-textfield ${className}`}
      variant={variant}
      {...otherProps}
    />
  );
};

export default TextFieldComponent;
