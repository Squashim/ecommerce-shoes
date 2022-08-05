import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Cart from "./Cart";

import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import exit from "../images/icon-close.svg";

export const Header = ({ selectedValue, setSelectedValue }) => {
	const [openCart, setCartOpen] = useState(false);
	const cartToggler = () => setCartOpen((p) => !p);

	const hidden = {
		display: "none",
	};
	const visible = {
		display: "flex",
	};

	const [menuOpen, setMenuOpen] = useState(false);
	const menuToggler = () => setMenuOpen((p) => !p);
	const [size, setSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (size.width > 768 && menuOpen) {
			setMenuOpen(false);
		}
	}, [size.width, menuOpen]);

	return (
		<div className={styles.header}>
			{openCart ? (
				<Cart
					selectedValue={selectedValue}
					setSelectedValue={setSelectedValue}
				/>
			) : (
				""
			)}

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
					<span
						id="cartValue"
						className={styles.amountView}
						style={selectedValue <= 0 ? hidden : visible}
					>
						{selectedValue}
					</span>

					<img
						src={cart}
						alt=""
						className="cartIcon"
						id={styles.cart}
						onClick={cartToggler}
					></img>

					<img src={avatar} alt="" id={styles.profile}></img>
				</div>
			</div>
		</div>
	);
};

export default Header;
