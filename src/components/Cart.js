import React, { useState } from "react";
import styles from "./Cart.module.scss";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import bin from "../images/icon-delete.svg";

export const Cart = ({ selectedValue }) => {
	const [isEmpty, setEmpty] = useState(true);
	const black = {
		color: "black",
		fontWeight: "bold",
	};

	const emptySetter = () => {
		setEmpty(true);
	};

	const ShowContent = () => {
		return selectedValue <= 0 ? (
			<p className={styles.placeholder}>Your cart is empty.</p>
		) : (
			<>
				<div className={styles.cart__item}>
					<img
						src={thumbnail}
						alt=""
						className={styles.cart__item__thumb}
					></img>
					<div className={styles.cart__item__desc}>
						<p className={styles.name}>Autumn Limited Edition Sneakers</p>
						<p className={styles.price}>
							$125.00 x {selectedValue}{" "}
							<span style={black}>{`$${125 * selectedValue}.00`}</span>
						</p>
					</div>
					<img
						src={bin}
						alt=""
						onClick={emptySetter}
						className={styles.cart__item__bin}
					></img>
				</div>
				<button className={styles.cart__checkout}>Checkout</button>
			</>
		);
	};

	return (
		<div className={styles.cart}>
			<div className={styles.cart__heading}>
				<h3>Cart</h3>
			</div>
			<div className={styles.cart__content}>
				{isEmpty ? (
					<p className={styles.placeholder}>Your cart is empty.</p>
				) : (
					<ShowContent />
				)}
			</div>
		</div>
	);
};

export default Cart;
