import { Card, Typography, Fab } from "@mui/material";
import { Box } from "../../components";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../Context";

export default function CardNewItem({ title, actionType, Icon, color }) {
  const navigate = useNavigate();
  const { translate } = useAppContext();

  return (
    <Card
      sx={{
        overflow: "visible",
        borderRadius: 5,
        padding: 1,
        margin: 0.5,
        height: "fit-content",
      }}
    >
      <Box sx={{ ...styles.containerBox }}>
        <Icon sx={{ fontSize: "3rem", color: color }} />
      </Box>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: "700",
          width: "100%",
          marginTop: "0.5rem",
          wordWrap: "break-word",
        }}
      >
        {translate(title)}
      </Typography>
      <Box sx={{ ...styles.containerBox }}>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "400",
            color: "#888",
            wordWrap: "break-word",
          }}
        >
          Adicionar algo
        </Typography>
        <Box></Box>
      </Box>
      <Box sx={{ ...styles.containerBox }}>
        <Fab
          onClick={() => {
            navigate(`new/${actionType}`);
          }}
          sx={{
            color: color,
            backgroundColor: "#fff",
            bottom: "-35px",
          }}
        >
          <AddIcon sx={{ color: color }} />
        </Fab>
      </Box>
    </Card>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
