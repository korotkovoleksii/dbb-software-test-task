import { Box, Button, Typography } from "@mui/material";

const Toolbar = ({ pathLower }: { pathLower: string }) => {
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
      <Typography variant="h5">{pathLower}</Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
        }}
      >
        <Button variant="contained" size="small">
          Copy to DropBox
        </Button>
        <Button variant="contained" size="small">
          Download
        </Button>
      </Box>
    </Box>
  );
};

export default Toolbar;
