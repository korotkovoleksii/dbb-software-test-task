import { useEffect } from "react";
import { Dropbox } from "dropbox";
import { CssBaseline, Divider } from "@mui/material";
import Header from "../../modules/components/Header/Header";

const App = () => {
  const accessToken = import.meta.env.VITE_TOKEN;
  const sharedLink =
    "https://www.dropbox.com/scl/fo/apbz61su4adn55q0h1ye0/h?dl=0&rlkey=h8oqwsgmu5i8ulr0lrpok51pm";

  const dbx = new Dropbox({ accessToken });

  useEffect(() => {
    dbx
      .sharingGetSharedLinkMetadata({ url: sharedLink })
      .then((res) => {
        const path = res.result.path_lower || "";
        return dbx.filesListFolder({ path });
      })
      .then((res) => {
        console.log(res.result);
      })
      .catch(function (error) {
        console.error(error, "111111");
      });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Divider />
      <p>Hello world</p>
    </>
  );
};

export default App;
