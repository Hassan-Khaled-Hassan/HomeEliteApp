import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import image from "../images/ULogo.png";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ height: "112px", bgcolor: "#f0f0f0",position: "relative" }}>
        <Toolbar>
          <Box sx={{ flexGrow: { xs: 1, sm: "initial" }, m: "auto" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to="/">
                <img
                  src={image}
                  alt="logo"
                  style={{
                    height: "111px",
                    width: "111px",
                    mt: "-9px",
                    ml: "5px",
                  }}
                />
              </Link>
            </Box>
          </Box>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "black",
              fontWeight: "bold",
            }}
          >
            Home Elite
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
