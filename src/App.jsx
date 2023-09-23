import "./styles.css";
import { Box } from "@mui/material";
import HighAndLow from "./HighAndLow";
import Title from "./components/Title";

export default function App() {
  return (
    <Box className="app">
        <Title />
        <HighAndLow />
    </Box>
  );
}
