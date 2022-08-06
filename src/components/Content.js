import React, { useState, useEffect } from "react";
import styles from "./Content.module.scss";

import iconNext from "../images/icon-next.svg";
import iconPrev from "../images/icon-previous.svg";
import iconCart from "../images/icon-cart.svg";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import iconClose from "../images/icon-close.svg";

const Content = ({ setSelectedValue }) => {
	const AddButton = () => {
		const addAmount = (value) => {
			setSelectedValue(value);
		};
		return (
			<button
				id="addBtn"
				className={styles.cartAdd}
				onClick={() =>
					addAmount(document.querySelector("#quantity").textContent)
				}
			>
				<img src={iconCart} alt=""></img>
				Add to cart
			</button>
		);
	};

	const image1 = require(`../images/image-product-1.jpg`);
	const image2 = require(`../images/image-product-2.jpg`);
	const image3 = require(`../images/image-product-3.jpg`);
	const image4 = require(`../images/image-product-4.jpg`);
	const images = { image1, image2, image3, image4 };

	const [amount, setAmount] = useState(0);
	const handleIncrement = () => {
		setAmount(amount + 1);
	};
	const handleDecrement = () => {
		amount > 0 ? setAmount(amount - 1) : setAmount(0);
	};

	const changeImage = (e) => {
		const arr = e.target.className.split(" ");
		let currentImg = document.querySelectorAll(`.currentImg`);
		let otherImg = document.querySelectorAll(`.other`);
		switch (arr[0]) {
			case "left":
				currentImg.forEach((img) => {
					console.log(img.src);
					console.log(images.image1);
					if (img.src == images.image1) {
						img.src = images.image4;
					} else if (img.src == images.image2) {
						img.src = images.image1;
					} else if (img.src == images.image3) {
						img.src = images.image2;
					} else if (img.src == images.image4) {
						img.src = images.image3;
					}
					otherImg.forEach((image) => {
						image.classList.remove(`${styles.selected}`);
						if (image.src == img.src) {
							image.classList.add(`${styles.selected}`);
						} else return;
					});
				});
				break;

			case "right":
				currentImg.forEach((img) => {
					if (img.src == images.image1) {
						img.src = images.image2;
					} else if (img.src == images.image2) {
						img.src = images.image3;
					} else if (img.src == images.image3) {
						img.src = images.image4;
					} else if (img.src == images.image4) {
						img.src = images.image1;
					}
					otherImg.forEach((image) => {
						image.classList.remove(`${styles.selected}`);
						if (image.src == img.src) {
							image.classList.add(`${styles.selected}`);
						} else return;
					});
				});
		}
	};

	const HandlePhotoClick = (event) => {
		let selectedImg = event.target;
		let currentImg = document.querySelectorAll(`.currentImg`);
		let otherImg = document.querySelectorAll(`.other`);

		otherImg.forEach((image) => {
			image.classList.remove(`${styles.selected}`);
		});

		currentImg.forEach((img) => {
			selectedImg.classList.add(`${styles.selected}`);
			img.src = selectedImg.src;
		});

		otherImg.forEach((image) => {
			if (selectedImg.src == image.src) {
				image.classList.add(`${styles.selected}`);
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
		if (size.width < 1024 && lightroomOpen) {
			toggleLightroom(false);
		}
	}, [size.width, toggleLightroom]);

	return (
		<main className={styles.main}>
			<div className={lightroomOpen ? styles.lightroom : styles.hidden}>
				<div className={styles.lightroom__container}>
					<img
						src={iconClose}
						className={styles.closeIcon}
						onClick={lighroomToggler}
					/>
					<div className={styles.bigImage}>
						<div className={styles.currentImg}>
							<img id="1" className="currentImg" src={image1} />
						</div>
						<div className={styles.arrowLeft}>
							<img
								onClick={changeImage}
								className="left"
								src={iconPrev}
								alt=""
							></img>
						</div>
						<div className={styles.arrowRight}>
							<img
								onClick={changeImage}
								className="right"
								src={iconNext}
								alt=""
							></img>
						</div>
					</div>
					<div className={styles.otherImg}>
						<img
							src={image1}
							className={`${styles.selected} other`}
							onClick={HandlePhotoClick}
							id="2"
						/>
						<img
							src={image2}
							id="3"
							className="other"
							onClick={HandlePhotoClick}
						/>
						<img
							src={image3}
							id="4"
							className="other"
							onClick={HandlePhotoClick}
						/>
						<img
							src={image4}
							id="5"
							className="other"
							onClick={HandlePhotoClick}
						/>
					</div>
				</div>
			</div>

			<div className={styles.main__images}>
				<div className={styles.currentImg}>
					<img
						src={image1}
						className="currentImg"
						id="6"
						onClick={lighroomToggler}
					/>
					<div onClick={changeImage} className={`left ${styles.arrowLeft}`}>
						<img src={iconPrev} alt=""></img>
					</div>
					<div onClick={changeImage} className={`right ${styles.arrowRight}`}>
						<img src={iconNext} alt=""></img>
					</div>
				</div>
				<div className={styles.otherImg}>
					<img
						id="7"
						src={image1}
						className={`${styles.selected} other`}
						onClick={HandlePhotoClick}
					/>
					<img
						src={image2}
						id="8"
						className="other"
						onClick={HandlePhotoClick}
					/>
					<img
						src={image3}
						id="9"
						className="other"
						onClick={HandlePhotoClick}
					/>
					<img
						src={image4}
						id="10"
						className="other"
						onClick={HandlePhotoClick}
					/>
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
						<img src={iconMinus} onClick={handleDecrement} alt=""></img>
						<p id="quantity">{amount}</p>
						<img src={iconPlus} alt="" onClick={handleIncrement}></img>
					</div>
					<AddButton />
				</div>
			</div>
		</main>
	);
};

export default Content;
