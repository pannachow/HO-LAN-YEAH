import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  button: {
    margin: theme.spacing(1),
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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
}

const sections = [
  { title: "CBD", url: "#" },
  { title: "Skincare & Cosmetics", url: "#" },
  { title: "Toys & Souvenirs", url: "#" },
];

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center" justifyContent="flex-start">
          <Link href="#">
            <img style={styles.logo} src="logo.png" alt="logo" />
          </Link>
        </Box>

        <Box display="flex" justifyContent="flex-end" flexGrow={1}>
          <Box className={classes.search} alignItems="center" display="flex">
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Box>

          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            startIcon={<LocalMallIcon />}
          >
            Shopping Cart
          </Button>

          <Button
            component={RouterLink}
            variant="outlined"
            size="small"
            className={classes.button}
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
        className={classes.toolbarSecondary}
      >
        {sections.map((section, i) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
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
