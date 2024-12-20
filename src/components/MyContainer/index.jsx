import { Box, Container } from "@mui/material";

export default function MyContainer() {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "lightblue",
            width: 150,
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          Bloco 1
        </Box>

        <Box
          sx={{
            bgcolor: "lightgreen",
            width: 100,
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          Bloco 2
        </Box>

        <Box
          sx={{
            bgcolor: "lightcoral",
            width: 300,
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          Bloco 3
        </Box>

        <Box
          sx={{
            bgcolor: "yellow",
            width: 400,
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          Bloco 4
        </Box>

        {/* Bloco 5 */}
        <Box
          sx={{
            bgcolor: "lightpink",
            width: 150,
            height: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2,
          }}
        >
          Bloco 5
        </Box>
      </Container>
    </div>
  );
}
