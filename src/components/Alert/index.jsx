import { useState } from "react";
import {
  IconButton,
  Button,
  Alert as MUIAlert,
  Collapse,
  Box,
  Stack,
} from "@mui/material";
import { useAppContext } from "../../Context";
import Button16 from "../Button16";
import CloseIcon from "@mui/icons-material/Close";

const Alert = () => {
  const { alertMessage, alertSeverity, showAlertMessage } = useAppContext();

  const [open, setOpen] = useState(false);

  return (
    <Button16
      sx={{ mt: -10 }}
      onClick={() => showAlertMessage(alertSeverity, alertMessage)}
    >
      <MUIAlert sx={{ mt: -10 }}>{alertMessage}</MUIAlert>
    </Button16>
  );
};

export default Alert;
