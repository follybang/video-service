import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}></Box>
    Navbar
    <Routes>
      <Route path="/" exact element={<Feed />} />
    </Routes>
  </BrowserRouter>
);

export default App;
