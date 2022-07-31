import React from "react";
import styles from "./Content.module.scss";

import iconNext from "../images/icon-next.svg";
import iconPrev from "../images/icon-previous.svg";
import iconCart from "../images/icon-cart.svg";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";

import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";

const Content = () => {
	const images = [image1, image2, image3, image4];

	function handlePhotoChange(e) {
		const currentImg = document.querySelector(".bigImg");
		const selected = e.target.src;
		currentImg.setAttribute("src", selected);
	}

	return (
		<main className={styles.main}>
			<div className={styles.main__images}>
				<div className={styles.currentImg}>
					<img src={image1} className="bigImg"></img>
				</div>
				<div className={styles.otherImg}>
					{images.map((img, key) => {
						return (
							<img
								id={key}
								key={key}
								src={img}
								onClick={handlePhotoChange}
							></img>
						);
					})}
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
