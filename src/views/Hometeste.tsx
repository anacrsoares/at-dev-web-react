import {
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { useAppContext } from "../Context";

import {
  DatePickerComponent,
  SwitchComponent,
  TabComponent,
  Alert,
  MyAvatar,
  Box,
  MyCheckBox,
  MyContainer,
  SnackBar,
  MyFab,
} from "../components";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Hometeste: React.FC = () => {
  const { chooseLanguage, showAlertMessage } = useAppContext();

  const label = { inputProps: { "aria-label": "Size switch demo" } };

  return (
    <div>
      <p>Home TP 2</p>
      <Button onClick={chooseLanguage}>Mudar idioma</Button>
      <div>
        <hr />
        <div>
          <h1>TP 2</h1>
          <h2>1. Crie um componente de Alert em seu projeto</h2>
          <p>
            Crie e teste seu componente de alert dentro do projeto para
            confirmar que ele funciona conforme o esperado.
          </p>
          <Alert />

          <div>
            <h2>2. Crie um componente de Avatar em seu projeto</h2>

            <p>
              Crie e teste seu componente de avatar dentro do projeto para
              confirmar que ele funciona conforme o esperado.
            </p>
            <MyAvatar />
          </div>
          <h2>3. Crie um componente de Box em seu projeto</h2>
          <p>
            Crie e teste seu componente de box dentro do projeto para confirmar
            que ele funciona conforme o esperado.
          </p>

          <Box />

          <div>
            <h2>4. Crie um componente de Card em seu projeto</h2>
            <p>
              Crie e teste seu componente de card dentro do projeto para
              confirmar que ele funciona conforme o esperado.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Categorias
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Veja as categorias de produtos disponíveis na loja.
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
          <div>
            <h2>5. Crie um componente de Checkbox em seu projeto</h2>
            <p>
              Crie e teste seu componente de checkbox dentro do projeto para
              confirmar que ele funciona conforme o esperado.
            </p>
            <MyCheckBox />
          </div>
          <div>
            <h2>6. Crie um componente de Container em seu projeto</h2>
            <p>
              Crie e teste seu componente de container dentro do projeto para
              confirmar que ele funciona conforme o esperado.
            </p>

            <MyContainer />

            <div>
              <h2>
                7. Instale a biblioteca adicionar @mui/x-date-pickers em seu
                projeto
              </h2>
              <p>
                A biblioteca mui x-date-picker é uma lib a parte que precisa ser
                instalada antes de construir o componente de datepicker e
                datetimepicker.
              </p>
            </div>

            <div>
              <h2>
                8. Crie um componente de DatePicker e outro de DateTimePicker em
                seu projeto
              </h2>
              <p>
                Crie e teste seus componentes de datePicker e DateTimePicker
                dentro do projeto para confirmar que eles funcionam conforme o
                esperado.
              </p>
              {/* <DatePickerComponent format="DD / MM / YYYY" />
              <DateTimePickerComponent
                format="DD / MM / YYYY HH:mm"
                ampm={false}
              /> */}
            </div>

            <div>
              <h2>9. Crie um componente de Fab em seu projeto</h2>
              <p>
                Crie e teste seus componentes de datePicker e DateTimePicker
                dentro do projeto para confirmar que eles funcionam conforme o
                esperado.
              </p>
              <MyFab />
            </div>

            <div>
              <h2>11. Crie um componente de IconButton em seu projeto</h2>
              <p>
                Crie e teste seus componentes de datePicker e DateTimePicker
                dentro do projeto para confirmar que eles funcionam conforme o
                esperado.
              </p>
              <IconButton aria-label="cart">
                <ShoppingCartIcon fontSize="large" />
              </IconButton>
            </div>

            <div>
              <h2>12. Crie um componente de SnackBar em seu projeto</h2>
              <p>
                Crie e teste seu componente de snackBar dentro do projeto para
                confirmar que ele funciona conforme o esperado.
              </p>

              <SnackBar />
            </div>

            <div>
              <h2>13. Crie um componente de Switch em seu projeto</h2>
              <p>
                Crie e teste seu componente de switch dentro do projeto para
                confirmar que ele funciona conforme o esperado.
              </p>
              <SwitchComponent />
            </div>

            <div>
              <h2>14. Crie um componente de Tab em seu projeto</h2>
              <p>
                Crie e teste seu componente de tab dentro do projeto para
                confirmar que ele funciona conforme o esperado.
              </p>
              <TabComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hometeste;
