"use client";

import { Breadcrumbs, Link } from "@mui/material";
import { usePathname } from "next/navigation";

function NavBar(): JSX.Element {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline={isActive("/") ? "always" : "hover"}
          color="inherit"
          href="/"
        >
          Home
        </Link>
        <Link
          underline={isActive("/doneToDo") ? "always" : "hover"}
          color="inherit"
          href="/doneToDo"
        >
          한 일들
        </Link>
        <Link
          underline={isActive("/didNotYet") ? "always" : "hover"}
          color="inherit"
          href="/didNotYet"
        >
          아직 안 한 일들
        </Link>
      </Breadcrumbs>
    </>
  );
}

export default NavBar;
