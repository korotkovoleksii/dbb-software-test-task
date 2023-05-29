import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { files } from "dropbox";
import { useNavigate } from "react-router-dom";
import FolderIcon from "@mui/icons-material/Folder";
import React from "react";

const ContentArea = ({ data }: { data: files.ListFolderResult }) => {
  const navigate = useNavigate();
  const stubHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("Not implemented");
  };
  return (
    <Box>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Modified</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.entries.map((row) => (
              <TableRow
                sx={{
                  cursor: "pointer",
                  height: "70px",
                  "&:hover .MuiButton-root": {
                    display: "flex",
                  },
                }}
                onClick={() => {
                  navigate(row.path_lower || "");
                }}
                key={row.name}
              >
                <TableCell sx={{ width: "25%" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FolderIcon />
                    {row.name}
                  </Box>
                </TableCell>
                <TableCell align="left" sx={{ wight: "25%" }}>
                  {"--"}
                </TableCell>
                <TableCell align="right" sx={{ width: "50%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "end",
                      gap: "5px",
                      width: "100%",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        display: "none",
                      }}
                      onClick={stubHandler}
                    >
                      Copy to DropBox
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        display: "none",
                      }}
                      onClick={stubHandler}
                    >
                      Download
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default ContentArea;
