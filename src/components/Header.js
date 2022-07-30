import React, { useState } from "react";
import styles from "./Header.module.scss";

import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuToggler = () => setMenuOpen((p) => !p);
	return (
		<div className={styles.header}>
			<div className={styles.header__content}>
				<div className={styles.header__content__left}>
					<img
						src={menu}
						alt=""
						id={styles.menuIcon}
						onClick={menuToggler}
					></img>
					<img src={logo} alt="sneakers"></img>
					<nav className={`styles[nav--open]`}>
						<a className={styles.nav__item} href="#">
							Collections
						</a>
						<a className={styles.nav__item} href="#">
							Men
						</a>
						<a className={styles.nav__item} href="#">
							Women
						</a>
						<a className={styles.nav__item} href="#">
							About
						</a>
						<a className={styles.nav__item} href="#">
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
