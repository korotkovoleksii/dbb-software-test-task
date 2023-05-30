import { CssBaseline, Divider } from "@mui/material";
import Header from "../../modules/components/Header/Header";
import Finder from "../../modules/components/Finder/Finder";
import { Route, Routes } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Divider />
        <Routes>
          <Route path={"*"} element={<Finder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
