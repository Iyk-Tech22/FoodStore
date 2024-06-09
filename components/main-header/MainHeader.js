import Link from "next/link";
import logo from "@/assets/logo.png"
import Image from "next/image";
import classes from "@/components/main-header/MainHeader.module.css"
import MainHeaderBg from "./MainHeaderBg";
import NavLink from "../nav-link/NavLink";

export default function MainHeader() {
    return (
      <>
        <MainHeaderBg />
        <header className={classes.header}>
          <Link href="/" className={classes.logo}>
            <Image src={logo} alt="Meals Logo" />
            FoodStore
          </Link>
          <nav className={classes.nav}>
            <ul>
              <li>
                  <NavLink href="/meals">Browse Meals</NavLink>
              </li>
              <li>
                  <NavLink href="/community">FoodStore Community</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
}