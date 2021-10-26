import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link component={RouterLink} color="inherit" to="/">
        HO LAN YEAH
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
