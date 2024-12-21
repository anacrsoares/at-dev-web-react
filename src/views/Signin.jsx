import { useAppContext } from "../Context";
import { Typography, TextField, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Grid, MyAvatar } from "../components";
import { Button16 } from "../components";
import logo from "../assets/img/logo.png";
import { signIn } from "../services/authentication";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const { showSnackMessage, supabase, translate } = useAppContext();

  const [data, setData] = useState({
    email: {
      value: "",
      error: null,
      helperText: null,
    },
    password: {
      value: "",
      error: null,
      helperText: null,
    },
  });

  const verifyLogin = async () => {
    let { data: response, error } = await signIn(
      data.email.value,
      data.password.value,
      supabase
    );

    if (error && error.message === "Invalid login credentials") {
      showSnackMessage("Dados de usuário inválidos");
    } else {
      localStorage.setItem("session", JSON.stringify(response.session));
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        paddingTop: 4,
      }}
    >
      <Grid container={true} size={{ xs: 12 }} sx={{ ...styles.centerBox }}>
        <Grid item={true}>
          <MyAvatar sx={{ width: 180, height: 180, padding: 2 }} src={logo} />
        </Grid>
      </Grid>

      <Grid item={true} size={{ xs: 12 }} sx={{ ...styles.centerBox }}>
        <Typography variant="h3">{translate("welcome")}</Typography>
      </Grid>

      <Grid
        item={true}
        size={{ xs: 12 }}
        sx={{
          ...styles.centerBox,
          ...styles.boxAdjustment,
        }}
      >
        <Typography variant="h5">
          {translate("email")}
          <TextField
            label="Digite seu e-mail"
            fullWidth={true}
            value={data.email.value}
            onChange={(event) => {
              const dataLocal = data;
              dataLocal["email"].value = event.target.value;
              setData((prevData) => ({ ...prevData, ...dataLocal }));
            }}
          />
        </Typography>
      </Grid>

      <Grid
        item={true}
        size={{ xs: 12 }}
        sx={{ ...styles.centerBox, ...styles.boxAdjustment }}
      >
        <Typography variant="h5">
          {translate("password")}
          <TextField
            type="password"
            label="Digite sua senha"
            fullWidth={true}
            value={data.password.value}
            onChange={(event) => {
              const dataLocal = data;
              dataLocal["password"].value = event.target.value;
              setData((prevData) => ({ ...prevData, ...dataLocal }));
            }}
          />
        </Typography>
      </Grid>

      <Grid
        item={true}
        size={{ xs: 12 }}
        sx={{ ...styles.centerBox, ...styles.boxAdjustment }}
      >
        <Button16 onClick={verifyLogin}>{translate("login")}</Button16>
      </Grid>

      <Grid item={true} size={{ xs: 12 }}>
        <Link to="/signup">{translate("sign-up")}</Link>
      </Grid>
    </Box>
  );
};

const styles = {
  centerBox: {
    display: "flex",
    alignItems: "space-between",
    justifyContent: "center",
  },
  boxAdjustment: {
    padding: 2,
    alignItems: "center",
  },
  marginTop: {
    marginTop: 2,
  },
  testWidth: {
    borderWidth: 1,
    borderColor: "#333",
  },
};

export default SignIn;
