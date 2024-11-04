"use client";
import { createTheme } from "@mui/material/styles";
import { deepPurple, lightGreen } from "@mui/material/colors";
import type { LinkProps } from "@mui/material";
import { LinkBehavior } from "@/MUI/LinkBehaviour";

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
        color: "inherit",
        underline: "none",
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
  colorSchemes: {
    dark: true,
    light: true
  }
});

export default theme;