import React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import MuiButton from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Button = styled(MuiButton)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const styles = {
  logo: {
    width: "400px",
  },
};

const sections = [
  { title: "CBD", url: "#" },
  { title: "Skincare & Cosmetics", url: "#" },
  { title: "Toys & Souvenirs", url: "#" },
];

export default function Header(props) {
  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: "1px",
          borderBottomStyle: "solid",
          borderBottomColor: "divider",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <Link href="#">
            <img style={styles.logo} src="logo.png" alt="logo" />
          </Link>
        </Box>

        <Box display="flex" justifyContent="flex-end" flexGrow={1}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Button variant="outlined" size="small" startIcon={<LocalMallIcon />}>
            Shopping Cart
          </Button>

          <Button
            component={RouterLink}
            variant="outlined"
            size="small"
            startIcon={<ExitToAppIcon />}
            to="/log-in"
          >
            Log In
          </Button>
        </Box>
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section, i) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ padding: 1, flexShrink: 0 }}
            onClick={() => props.setSelectedCategory(i)}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
