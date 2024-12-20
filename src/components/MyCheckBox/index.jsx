import React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

export default function MyCheckBox() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
    </div>
  );
}
