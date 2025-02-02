// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useMediaQuery, AppBar, Toolbar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useColorScheme } from "@mui/material/styles";
// import TabIndicator from '@mui/material/Tabs/TabIndicator';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  console.log(prefersDarkMode);
  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: (theme) => theme.trelloCustom.appBarHeight,
          backgroundColor: "primary.light",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeToggle />
      </Box>

      <Box
        sx={{
          width: "100%",
          height: (theme) => theme.trelloCustom.boardBarHeight,
          backgroundColor: "primary.dark",
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Bar
      </Box>
      <Box
        sx={{
          width: "100%",
          height: (theme) =>
            `calc(100% - ${theme.trelloCustom.appBarHeight} + ${theme.trelloCustom.boardBarHeight})`,
          backgroundColor: "primary.main",
          display: "flex",
          alignItems: "center",
        }}
      >
        Board Content
      </Box>
    </Container>
  );
}

export default App;
