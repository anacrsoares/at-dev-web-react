import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface IButton16Props extends ButtonProps {
  children: React.ReactNode;
  props?: any;
}

const Button16: React.FC<IButton16Props> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        backgroundColor: "#6200ea", // cor de fundo
        color: "#fff", // cor do texto
        borderRadius: "12px", // bordas arredondadas
        padding: "10px 20px", // espaçamento interno
        "&:hover": {
          backgroundColor: "#3700b3", // cor de fundo ao passar o mouse
        },
      }}
    >
      {children}
    </Button>
  );
};

export default Button16;
