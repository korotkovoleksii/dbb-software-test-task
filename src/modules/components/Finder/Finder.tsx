import { Box, Container, Typography } from "@mui/material";
import ContentArea from "../ContentArea/ContentArea";
import Toolbar from "../Toolbar/Toolbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dropbox, files } from "dropbox";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const Finder = () => {
  const [dataFolders, setDataFolders] = useState<files.ListFolderResult>();
  const [pathLower, setPathLower] = useState("");
  const accessToken = import.meta.env.VITE_TOKEN;
  const sharedLink = import.meta.env.VITE_SHARED_LINK;
  const { pathname } = useLocation();
  const dbx = new Dropbox({ accessToken });

  useEffect(() => {
    dbx
      .sharingGetSharedLinkMetadata({ url: sharedLink })
      .then((res) => {
        const resPathLower = res.result.path_lower || "";
        const path = pathname == "/" ? resPathLower : pathname;
        setPathLower(path);
        return dbx.filesListFolder({ path });
      })
      .then((res) => {
        setDataFolders(res.result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [pathname]);

  const emptyFolder = (
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FolderOutlinedIcon fontSize={"large"} />
      <Typography>This folder is empty</Typography>
    </Box>
  );

  return (
    <Box>
      <Container maxWidth={"md"}>
        {dataFolders && <Toolbar pathLower={pathLower} />}
        {dataFolders && dataFolders.entries.length > 0 ? (
          <ContentArea data={dataFolders} />
        ) : (
          emptyFolder
        )}
      </Container>
    </Box>
  );
};

export default Finder;
