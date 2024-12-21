import { TextField } from "@mui/material";

const TextFieldComponent = (props) => {
  const { variant = "outlined", ...otherProps } = props;

  return (
    <TextField
      variant={variant}
      {...otherProps}
      className={`general-textfield ${props.className} ? ${props.className} : ""`}
    />
  );
};

export default TextFieldComponent;
