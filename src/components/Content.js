import React, { useState, useEffect } from "react";
import styles from "./Content.module.scss";

import iconNext from "../images/icon-next.svg";
import iconPrev from "../images/icon-previous.svg";
import iconCart from "../images/icon-cart.svg";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import iconClose from "../images/icon-close.svg";

const Content = () => {
	const image1 = require(`../images/image-product-1.jpg`);
	const image2 = require(`../images/image-product-2.jpg`);
	const image3 = require(`../images/image-product-3.jpg`);
	const image4 = require(`../images/image-product-4.jpg`);
	const images = { image1, image2, image3, image4 };

	const HandlePhotoClick = (event) => {
		const selectedImg = event.target;
		const currentImg = document.querySelectorAll(".currentImg");

		currentImg.forEach((img) => {
			if (selectedImg.src === img.src) {
				return;
			} else {
				selectedImg.classList.add(`${styles.selected}`);
				img.src = selectedImg.src;
			}
		});
	};
	const [lightroomOpen, toggleLightroom] = useState(false);
	const lighroomToggler = () => toggleLightroom((p) => !p);

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
		if (size.width > 768 && lightroomOpen) {
			toggleLightroom(false);
		}
	}, [size.width, toggleLightroom]);

	return (
		<main className={styles.main}>
			<div className={lightroomOpen ? styles.lightroom : styles.hidden}>
				<div className={styles.lightroom__container}>
					<img
						src={iconClose}
						alt=""
						className={styles.closeIcon}
						onClick={lighroomToggler}
					></img>
					<div className={styles.bigImage}>
						<div className={styles.currentImg}>
							<img className="currentImg" src={image1} />
						</div>
						<div className={styles.arrowLeft}>
							<img src={iconPrev} alt=""></img>
						</div>
						<div className={styles.arrowRight}>
							<img src={iconNext} alt=""></img>
						</div>
					</div>
					<div className={styles.otherImg}>
						<img src={image1} onClick={HandlePhotoClick} />
						<img src={image2} onClick={HandlePhotoClick} />
						<img src={image3} onClick={HandlePhotoClick} />
						<img src={image4} onClick={HandlePhotoClick} />
					</div>
				</div>
			</div>

			<div className={styles.main__images}>
				<div className={styles.currentImg}>
					<img src={image1} className="currentImg " onClick={lighroomToggler} />
				</div>
				<div className={styles.otherImg}>
					<img
						src={image1}
						className={styles.selected}
						onClick={HandlePhotoClick}
					/>
					<img src={image2} onClick={HandlePhotoClick} />
					<img src={image3} onClick={HandlePhotoClick} />
					<img src={image4} onClick={HandlePhotoClick} />
				</div>
			</div>
			<div className={styles.main__desc}>
				<span>Sneaker company</span>
				<h1>Fall Limited Edition Sneakers</h1>
				<p>
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they’ll withstand everything
					the weather can offer.
				</p>
				<div className={styles.prices}>
					<div className={styles.prices__new}>
						<h2>$125.00</h2>
						<span>50%</span>
					</div>
					<p>$250.00</p>
				</div>
				<div className={styles.buy}>
					<div className={styles.quan}>
						<img src={iconMinus} alt=""></img>
						<p>0</p>
						<img src={iconPlus} alt=""></img>
					</div>
					<button className={styles.cartAdd}>
						<img src={iconCart} alt=""></img>
						Add to cart
					</button>
				</div>
			</div>
		</main>
	);
};

export default Content;
