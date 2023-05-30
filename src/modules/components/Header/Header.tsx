import { Box, SvgIcon, Button, IconButton } from "@mui/material";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Header = () => {
  const stubHandler = () => {
    console.log("Not implemented");
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "63px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px 0 16px",
      }}
    >
      <IconButton onClick={stubHandler}>
        <SvgIcon fontSize="large" component={Logo} inheritViewBox></SvgIcon>
      </IconButton>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <IconButton onClick={stubHandler}>
          <HelpOutlineIcon />
        </IconButton>
        <Button variant="outlined" onClick={stubHandler}>
          Sing In
        </Button>
        <Button variant="contained" onClick={stubHandler}>
          Sing Up
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
