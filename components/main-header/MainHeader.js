import Link from "next/link";
import logo from "@/assets/logo.png"
import Image from "next/image";
import styles from "@/components/main-header/MainHeader.module.css"
import MainHeaderBg from "./MainHeaderBg";
import NavLink from "../nav-link/NavLink";

export default function MainHeader() {
    return (
      <>
        <MainHeaderBg />
        <header className={styles.header}>
          <Link href="/" className={styles.logo}>
            <Image src={logo} alt="Meals Logo" />
            FoodStore
          </Link>
          <nav className={styles.nav}>
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