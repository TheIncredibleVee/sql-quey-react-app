import { ColorScheme, colors } from "@vechaiui/react";

export const cool: ColorScheme = {
  id: "cool",
  type: "dark",
  colors: {
    bg: {
      base: colors.coolGray["900"],
      fill: colors.coolGray["900"],
    },
    text: {
      foreground: colors.coolGray["100"],
      muted: colors.coolGray["300"],
    },
    primary: colors.cyan,
    neutral: colors.coolGray,
  },
};

export const pale: ColorScheme = {
    id: "pale",
    type: "dark",
    colors: {
      bg: {
        base: colors.blueGray["800"],
        fill: colors.blueGray["900"],
      },
      text: {
        foreground: colors.blueGray["100"],
        muted: colors.blueGray["300"],
      },
      primary: colors.violet,
      neutral: colors.blueGray,
    },
  };

  export const dawn: ColorScheme = {
    id: "dawn",
    type: "dark",
    colors: {
      bg: {
        base: "#322937",
        fill: "#0f0a13",
      },
      text: {
        foreground: "#dad3de",
        muted: "#a89ab0",
      },
      primary: colors.pink,
      neutral: {
        50: "#f6eff8",
        100: "#dad3de",
        200: "#c1b7c7",
        300: "#a89ab0",
        400: "#8f7d99",
        500: "#766380",
        600: "#5c4d64",
        700: "#413647",
        800: "#28212c",
        900: "#0f0a13",
      },
    },
  };

  export const midnight: ColorScheme = {
    id: "midnight",
    type: "dark",
    colors: {
      bg: {
        base: colors.trueGray["900"],
        fill: colors.trueGray["900"],
      },
      text: {
        foreground: colors.trueGray["100"],
        muted: colors.trueGray["300"],
      },
      primary: colors.rose,
      neutral: colors.trueGray,
    },
  };

  export const bee: ColorScheme = {
    id: "bee",
    type: "light",
    colors: {
      bg: {
        base: colors.warmGray["100"],
        fill: colors.warmGray["100"],
      },
      text: {
        foreground: colors.warmGray["900"],
        muted: colors.warmGray["700"],
      },
      primary: colors.amber,
      neutral: colors.warmGray,
    },
  };


  