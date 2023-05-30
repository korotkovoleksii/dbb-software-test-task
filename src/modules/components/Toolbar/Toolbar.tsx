import { Box, Breadcrumbs, Button, Typography, Link } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

const Toolbar = ({ pathLower }: { pathLower: string }) => {
  const stubHandler = () => {
    console.log("Not implemented");
  };

  const listPaths = pathLower
    .split("/")
    .filter((crumb: string) => crumb !== "")
    .reduce(
      (
        acc: { title: string; path: string }[],
        crumb: string,
        index: number,
        arr: string[]
      ) => {
        const breadcrumbPath: string = arr.slice(0, index + 1).join("/");
        const breadcrumb: { title: string; path: string } = {
          title: crumb,
          path: `/${breadcrumbPath}`,
        };
        return [...acc, breadcrumb];
      },
      []
    );

  return (
    <Box
      sx={{
        mt: "30px",
        mb: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        {listPaths.map((item) => (
          <Link
            component={RouterLink}
            to={item.path}
            sx={{
              textDecoration: "none",
              color: "#000000",
            }}
          >
            {" "}
            <Typography variant="h5">{item.title}</Typography>
          </Link>
        ))}
      </Breadcrumbs>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Button variant="contained" size="small" onClick={stubHandler}>
          Copy to DropBox
        </Button>
        <Button variant="contained" size="small" onClick={stubHandler}>
          Download
        </Button>
      </Box>
    </Box>
  );
};

export default Toolbar;
