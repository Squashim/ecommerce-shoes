import React from "react";
import styles from "../components/Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.attribution}>
			Challenge by {""}
			<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
				Frontend Mentor
			</a>
			. Coded by <a href="https://github.com/Squashim">Squashim</a>.
		</footer>
	);
};

export default Footer;
