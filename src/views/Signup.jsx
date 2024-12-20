import { useAppContext } from "../Context";
import { Typography, TextField, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Grid, MyAvatar } from "../components";
import { Button16, Alert } from "../components";
import logo from "../assets/img/logo.png";
import { signUp } from "../services/authentication";
import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validators";

const SignUp = () => {
  const navigate = useNavigate();
  const { showSnackMessage, showAlertMessage, supabase } = useAppContext();

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
    confirm_password: {
      value: "",
      error: null,
      helperText: null,
    },
  });

  const verifyRegister = async () => {
    const emailValidation = validateEmail(data.email.value);
    const passwordValidation = validatePassword(
      data.password.value,
      data.confirm_password.value,
      showAlertMessage
    );

    setData((currentData) => ({
      ...currentData,
      email: {
        value: currentData.email.value,
        error: emailValidation.error,
        helperText: emailValidation.helperText,
      },
      password: {
        value: currentData.password.value,
        error: passwordValidation.error,
        helperText: passwordValidation.helperText,
      },
      confirm_password: {
        value: currentData.confirm_password.value,
        error: passwordValidation.error,
        helperText: passwordValidation.helperText,
      },
    }));

    if (emailValidation.error || passwordValidation.error) {
      return;
    }

    if (data.password.value !== data.confirm_password.value) {
      showAlertMessage("As senhas não coincidem", "error");
      return;
    }

    let { data: response, error } = await signUp(
      data.email.value,
      data.password.value,
      supabase
    );

    if (error) {
      if (
        error.toString().indexOf("AuthApiError: User already registered") !== -1
      ) {
        showSnackMessage("Usuário já é registrado");
      } else {
        showSnackMessage(error.toString());
      }
    } else {
      showSnackMessage("Usuário criado com sucesso!");
      return navigate("/signin");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Grid container={true} size={{ xs: 12 }} sx={{ ...styles.centerBox }}>
        <Grid item={true}>
          <MyAvatar sx={{ width: 130, height: 130, padding: 1 }} src={logo} />
        </Grid>
      </Grid>

      <Grid item={true} size={{ xs: 12 }} sx={{ ...styles.centerBox }}>
        <Typography variant="h4">Faça seu cadastro</Typography>
      </Grid>

      <Grid
        item={true}
        size={{ xs: 12 }}
        sx={{
          ...styles.centerBox,
          ...styles.boxAdjustment,
        }}
      >
        <Typography variant="h6">
          E-mail
          <TextField
            label="Digite seu e-mail"
            fullWidth={true}
            onChange={(event) => {
              const dataLocal = data;
              dataLocal["email"].value = event.target.value;
              setData((prevData) => ({ ...prevData, ...dataLocal }));
            }}
            sx={styles.marginTextField}
            value={data.email.value}
            error={data.email.error}
            helperText={data.email.helperText}
          />
        </Typography>
      </Grid>

      <Grid
        item={true}
        size={{ xs: 12 }}
        sx={{ ...styles.centerBox, ...styles.boxAdjustment }}
      >
        <Typography variant="h6">
          Senha
          <TextField
            label="Digite sua senha"
            fullWidth={true}
            onChange={(event) => {
              const dataLocal = data;
              dataLocal["password"].value = event.target.value;
              setData((prevData) => ({ ...prevData, ...dataLocal }));
            }}
            sx={styles.marginTextField}
            value={data.password.value}
            error={data.password.error}
            helperText={data.password.helperText}
          />
        </Typography>
      </Grid>

      <Grid
        item={true}
        size={{ xs: 12 }}
        sx={{ ...styles.centerBox, ...styles.boxAdjustment }}
      >
        <Typography variant="h6">
          Confirme sua Senha
          <TextField
            label="Confirme sua senha"
            fullWidth={true}
            onChange={(event) => {
              const dataLocal = data;
              dataLocal["confirm_password"].value = event.target.value;
              setData((prevData) => ({ ...prevData, ...dataLocal }));
            }}
            sx={styles.marginTextField}
            value={data.confirm_password.value}
            error={data.confirm_password.error}
            helperText={data.confirm_password.helperText}
          />
        </Typography>
      </Grid>

      <Grid
        item={true}
        size={{ xs: 12 }}
        sx={{ ...styles.centerBox, ...styles.boxAdjustment }}
      >
        <Button16 onClick={verifyRegister}>Cadastrar</Button16>
      </Grid>

      <Grid item={true} size={{ xs: 12 }}>
        <Link to="/signin">Voltar pra página de Login</Link>
      </Grid>
    </Box>
  );
};

const styles = {
  centerBox: {
    justifyContent: "center",
  },
  boxAdjustment: {
    padding: 1,
    alignItems: "center",
  },
  marginTop: {
    marginTop: 2,
  },
  testWidth: {
    borderWidth: 1,
    borderColor: "#333",
  },
  marginTextField: {
    marginTop: 0.5,
  },
};

export default SignUp;
