// components/Navbar.jsx
import Link from "next/link";
import { Roboto_Condensed } from "next/font/google";
import { AppBar, Toolbar, Button } from "@mui/material";
import styles from "@/styles/App.module.scss";

const links = [
  { id: "1", href: "/", label: "Home" },
  { id: "2", href: "/QuickStart", label: "Quick Start" },
  { id: "3", href: "/FetchDemo", label: "Fetch Demo" },
  { id: "4", href: "/AxiosDemo", label: "Axios Demo" },
  // { id: "5", href: "/Cart", label: "Cart" },
];

const robotoFont = Roboto_Condensed({ subsets: ["latin"] });

export default function Navbar({ children }) {
  return (
    <>
      <AppBar
        className={`${styles.main} ${robotoFont.className}`}
        position="static"
      >
        <Toolbar sx={{ width: "80rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {links.map((link) => (
            <Link key={link.id} href={link.href} passHref>
              <Button
                sx={{
                  cursor: "crosshair",
                  borderRadius: "0.25rem",
                  padding: "1rem",
                  fontWeight: "900",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    borderRadius: "0.25rem",
                    backgroundColor: "skyblue",
                    color: "rgb(55 48 163)",
                    transform: "scale(1.1)",
                    margin: "0.5rem"
                  },
                }}
                color="inherit"
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </>
  );
}
