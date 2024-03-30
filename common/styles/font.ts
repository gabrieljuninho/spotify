import localFont from "next/font/local";

export const gotham = localFont({
  src: [
    {
      path: "../../styles/fonts/gotham/Gotham-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../styles/fonts/gotham/Gotham-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../styles/fonts/gotham/Gotham-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../styles/fonts/gotham/Gotham-ExtraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../styles/fonts/gotham/Gotham-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../styles/fonts/gotham/Gotham-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../styles/fonts/gotham/Gotham-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../styles/fonts/gotham/Gotham-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../styles/fonts/gotham/Gotham-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../styles/fonts/gotham/Gotham-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../styles/fonts/gotham/Gotham-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
});
