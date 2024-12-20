import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { Link } from "react-router-dom";

const TabComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="dashboard" component={Link} to="/dashboard" />
        <Tab label="form" component={Link} to="/new/:type" />
        <Tab label="settings" component={Link} to="/settings" />
      </Tabs>
    </Box>
  );
};

export default TabComponent;
