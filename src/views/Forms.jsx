import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../Context";
import { Button16, Diaper, Eat, Sleep, Grid, AppBar } from "../components";
import { useEffect, useState } from "react";
import { save, update, drop, get, list } from "../services/database";
import { getTitle, validateFields } from "../utils/action";
import { getUser } from "../utils/core";

const Form = () => {
  const { translate, showAlertMessage } = useAppContext();
  const navigate = useNavigate();

  const params = useParams();
  const actionType = params.type;
  const id = params.id;

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  // teste
  console.log(data);

  const getForm = (actionType) => {
    switch (actionType) {
      case "1":
        return <Sleep data={data} setData={setData} translate={translate} />;

      case "2":
        return <Eat data={data} setData={setData} translate={translate} />;

      case "3":
        return <Diaper data={data} setData={setData} translate={translate} />;

      default:
        return <Eat data={data} setData={setData} translate={translate} />;
    }
  };

  const loadData = async (id) => {
    if (id) {
      setData(get(id));
    }
  };

  useEffect(() => {
    if (params && params.id) {
      loadData(params.id);
    }
  }, []);

  // teste de salvar no Local Storage (fake save iniciante)
  // const save = async () => {
  //   const d = JSON.parse(window.localStorage.getItem("items"));
  //   // const d = list();

  //   let dFinal = [];

  //   if (d) {
  //     dFinal = [...d, data];
  //   } else {
  //     dFinal = [data];
  //   }

  //   console.log(dFinal);
  //   localStorage.setItem("items", JSON.stringify(dFinal));
  // };

  return (
    <>
      <AppBar
        title={translate(getTitle(actionType))}
        id={id}
        _delete={() => {
          const _confirm = confirm("Deseja mesmo deletar este item?");
          if (_confirm) {
            drop(id);
            showAlertMessage("Item deletado com sucesso!!!", "success");
            setTimeout(() => {
              navigate("/");
            }, 3000);
          } else {
            showAlertMessage("Ação cancelada", "error");
          }
        }}
      />
      <Grid
        container={true}
        spacing={2}
        sx={{
          marginTop: "1em",
          padding: "1em",
          height: "calc(100vh - 72px)",
        }}
      >
        <Grid item={true} size={{ xs: 12 }}>
          {getForm(actionType)}
          <Button16
            loading={loading}
            type="submit"
            fullWidth
            variant="contained"
            onClick={() => {
              save(data);
            }}
            sx={{
              mt: 3,
              mb: 2,
            }}
          >
            {translate("save")}
          </Button16>
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
