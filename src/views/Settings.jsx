import { useState } from "react";
import {
  AppBar,
  DateTimePicker,
  Grid,
  TextField,
  Typography,
  ButtonSettings,
} from "../components";
import { useAppContext } from "../Context";
import { adjustDateTimeForTimezone, getUser } from "../utils/core";
import { handleInputChange } from "../utils/action";
import { get, save } from "../services/database";
import { signOut } from "../services/authentication";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Settings = () => {
  const { translate, changeLanguage, supabase } = useAppContext();

  const navigate = useNavigate();

  const user = getUser();
  const [data, setData] = useState({});

  // const loadData = async () => {
  //   const result = await get("profile_students", [
  //     { field: "user_id", value: user.id },
  //   ]);
  //   setData(result);
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  const verifyLanguage = (language) => {
    const storeLanguage = localStorage.getItem("language");
    if (storeLanguage === language) {
      return "contained";
    }
    return "outlined";
  };

  return (
    <>
      <AppBar title={translate("settings")} />
      <Grid
        container={true}
        spacing={2}
        sx={{
          ...styles.boxAdjustment,
          ...styles.centerBox,
        }}
      >
        <Grid
          sx={{
            ...styles.marginTop,
          }}
          item={true}
          size={{ xs: 12 }}
        >
          <TextField
            placeholder={translate("name")}
            fullWidth={true}
            onChange={(event) =>
              handleInputChange("name", event.target.value, data, setData)
            }
            value={data.name ? data.name : null}
            sx={{ borderWidth: 2, borderColor: "red" }}
          />
        </Grid>
        <Grid sx={styles.marginTop} item={true} size={{ xs: 12 }}>
          <TextField
            placeholder={translate("height")}
            fullWidth={true}
            onChange={(event) =>
              handleInputChange("height", event.target.value, data, setData)
            }
            value={data.height}
          />
        </Grid>
        <Grid sx={styles.marginTop} item={true} size={{ xs: 12 }}>
          <TextField
            placeholder={translate("weight")}
            fullWidth={true}
            onChange={(event) =>
              handleInputChange("weight", event.target.value, data, setData)
            }
            value={data.weight}
          />
        </Grid>
        <Grid sx={styles.marginTop} item={true} size={{ xs: 12 }}>
          <DateTimePicker
            value={data?.birth ? adjustDateTimeForTimezone(data?.birth) : null}
            placeholder={translate("birth")}
            name="birth"
            fullWidth={true}
            ampm={false}
            format="DD/MM/YYYY"
            onChange={(value) => {
              handleInputChange(
                "birth",
                new Date(value.toString()),
                data,
                setData
              );
            }}
          />
        </Grid>
        <Grid item={true} size={{ xs: 12 }}>
          <ButtonSettings
            onClick={() => {
              save(data);
            }}
            fullWidth={true}
            variant="contained"
          >
            {translate("save")}
          </ButtonSettings>
        </Grid>
        <Grid sx={styles.marginTop} item={true} size={{ xs: 12 }}>
          <Typography variant="h5">{translate("app_language")}:</Typography>
        </Grid>
        <Grid item={true} size={{ xs: 12 }}>
          <ButtonSettings
            onClick={() => changeLanguage("en")}
            variant={verifyLanguage("en")}
            fullWidth={true}
          >
            {translate("english")}
          </ButtonSettings>
        </Grid>
        <Grid item={true} size={{ xs: 12 }}>
          <ButtonSettings
            onClick={() => changeLanguage("es")}
            variant={verifyLanguage("es")}
            fullWidth={true}
          >
            {translate("spanish")}
          </ButtonSettings>
        </Grid>
        <Grid item={true} size={{ xs: 12 }}>
          <ButtonSettings
            onClick={() => changeLanguage("pt")}
            variant={verifyLanguage("pt")}
            fullWidth={true}
          >
            {translate("portugues")}
          </ButtonSettings>
        </Grid>
        <Grid item={true} size={{ xs: 12 }}>
          <ButtonSettings
            onClick={() => signOut(supabase, navigate)}
            fullWidth={true}
            variant="contained"
          >
            {translate("logout")}
          </ButtonSettings>
        </Grid>
      </Grid>
    </>
  );
};

const styles = {
  centerBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  boxAdjustment: {
    height: "calc(100vh - 56px)",
    padding: 2,
  },
  marginTop: {
    marginTop: 1,
  },
};

export default Settings;
