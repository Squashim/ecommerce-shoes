import React from "react";
import styles from "./Header.module.scss";

import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__content}>
				<div className={styles.header__content__nav}>
					<img src={menu} alt="" id={styles.menuIcon}></img>
					<img src={logo} alt="sneakers"></img>
					<ul className={styles.navList}>
						<li>
							<a href="#">Collections</a>
						</li>
						<li>
							<a href="#">Men</a>
						</li>
						<li>
							<a href="#">Women</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
				<div className={styles.header__content__user}>
					<img src={cart} alt="" id={styles.cart}></img>
					<img src={avatar} alt="" id={styles.profile}></img>
				</div>
			</div>
		</div>
	);
};

export default Header;
