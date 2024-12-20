import { Switch, CssBaseline, Box } from "@mui/material";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const SwitchComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({ palette: { mode: darkMode ? "dark" : "light" } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        ></Switch>
      </Box>
    </ThemeProvider>
  );
};

export default SwitchComponent;
