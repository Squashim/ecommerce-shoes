import React, { useState } from "react";
import styles from "./Header.module.scss";

import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import exit from "../images/icon-close.svg";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuToggler = () => setMenuOpen((p) => !p);
	return (
		<div className={styles.header}>
			<div className={`${menuOpen ? styles[`black-bg`] : {}}`}></div>
			<div className={styles.header__content}>
				<div className={styles.header__content__left}>
					<img
						src={menu}
						alt=""
						id={styles.menuIcon}
						onClick={menuToggler}
					></img>
					<img src={logo} alt="sneakers"></img>
					<nav
						className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
					>
						<img
							src={exit}
							alt=""
							id={styles.exitIcon}
							onClick={menuToggler}
						></img>
						<a className={styles.item} href="#">
							Collections
						</a>
						<a className={styles.item} href="#">
							Men
						</a>
						<a className={styles.item} href="#">
							Women
						</a>
						<a className={styles.item} href="#">
							About
						</a>
						<a className={styles.item} href="#">
							Contact
						</a>
					</nav>
				</div>
				<div className={styles.header__content__right}>
					<img src={cart} alt="" id={styles.cart}></img>
					<img src={avatar} alt="" id={styles.profile}></img>
				</div>
			</div>
		</div>
	);
};

export default Header;
