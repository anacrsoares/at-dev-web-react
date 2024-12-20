import { useTheme } from "@mui/material/styles";
import { CardNewItem, Grid, MyAvatar, Box, CustomList } from "../components";

import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SettingsIcon from "@mui/icons-material/Settings";

import { IconButton, Typography } from "@mui/material";
import baby from "../assets/img/baby.png";
import { useNavigate } from "react-router-dom";

import { ACTIONS } from "../constants/actions";
import { useEffect, useState } from "react";

import { list } from "../services/database";

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  // teste: mostrando as acoes na home vindas do Local Storage
  const [data, setData] = useState([]);

  const dataLocal = () => {
    const d = JSON.parse(localStorage.getItem("items"));
    // const d = list();
    if (d) {
      setData(d);
    }
  };

  useEffect(() => {
    dataLocal();
  }, []);

  // fim do teste: mostrando as acoes na home vindas do Local Storage

  return (
    <>
      <Grid
        container={true}
        sx={{
          overflow: "hidden",
          height: "100vh",
          backgroundColor: `${theme.palette.primary.main}`,
        }}
      >
        <Grid
          container={true}
          size={{ xs: 12 }}
          sx={{
            ...styles.centerMyBox,
            border: `1px solid transparent`,
            backgroundColor: "#f0f0f0",
            height: "300px",
            paddingBottom: "110px",
          }}
        >
          <Grid
            item={true}
            size={{ xs: 4 }}
            onClick={() => navigate("/dashboard")}
          >
            <IconButton
              sx={{
                ...styles.iconButton,
                color: `${theme.palette.primary.main}`,
                borderRadius: "50%", // Cria o círculo
                border: `2px solid ${theme.palette.primary.main}`, // Cor da borda
              }}
            >
              {
                <SignalCellularAltIcon
                  fontSize="large"
                  sx={{ ...styles.icon }}
                />
              }
            </IconButton>
            <Box>
              <Typography sx={styles.text2}>52,5 cm</Typography>
              <Typography sx={styles.text3}>Comprimento</Typography>
            </Box>
          </Grid>
          <Grid item={true} size={{ xs: 4 }}>
            <MyAvatar
              src={baby}
              sx={{ ...styles.avatar, paddingTop: "15px" }}
            />
            <Box>
              <Typography sx={{ ...styles.text1, wordWrap: "break-word" }}>
                Helena
              </Typography>
              <Typography sx={{ ...styles.text3 }}>X Dia(s)</Typography>
            </Box>
          </Grid>
          <Grid
            item={true}
            size={{ xs: 4 }}
            onClick={() => navigate("/settings")}
          >
            <IconButton
              sx={{
                ...styles.iconButton,
                color: `${theme.palette.primary.main}`,
                borderRadius: "50%", // Cria o círculo
                border: `2px solid ${theme.palette.primary.main}`, // Cor da borda
              }}
            >
              {<SettingsIcon sx={{ ...styles.icon }} />}
            </IconButton>
            <Box>
              <Typography sx={{ ...styles.text2 }}>3,27 kg</Typography>
              <Typography sx={{ ...styles.text3 }}>Peso</Typography>
            </Box>
          </Grid>

          {/* inicio container de tarefas */}
          <Grid container={true} size={{ xs: 12 }}>
            <Grid
              container={true}
              sx={{
                ...styles.centerMyBox,
                position: "relative",
                top: "20px",
              }}
            >
              {ACTIONS.map((action, idx) => {
                return (
                  <Grid index={idx} item={true} size={{ xs: 4 }} key={idx}>
                    <CardNewItem {...action} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          {/* fim container de tarefas */}
          {/* inicio container de listagem de tarefas */}
          <Grid
            sx={{
              width: "100%",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <CustomList
              items={data}
              sx={{ overflow: "auto", maxHeight: "50vh", marginTop: "4em" }}
            />
          </Grid>
          {/* fim container de listagem de tarefas */}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

const styles = {
  centerMyBox: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  iconButton: {
    height: "2.5em",
    width: "2.5em",
  },
  icon: {
    fontSize: "2em",
  },
  MyBoxText: {
    flexDirection: "column",
    marginTop: ".5em",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 0,
    marginBottom: 1,
  },
  text1: {
    fontSize: "1.2em",

    fontWeight: "600",
    fontFamily: "'Lato', sans-serif",
  },
  text2: {
    fontSize: "1em",
    marginTop: "0.5em",
    fontWeight: "600",
  },
  text3: {
    fontSize: "1em",
    fontWeight: "400",
  },
};
