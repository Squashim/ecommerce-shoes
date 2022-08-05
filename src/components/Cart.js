import React from "react";
import styles from "./Cart.module.scss";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import bin from "../images/icon-delete.svg";

export const Cart = ({ selectedValue, setSelectedValue }) => {
	const black = {
		color: "black",
		fontWeight: "bold",
	};

	return (
		<div className={styles.cart}>
			<div className={styles.cart__heading}>
				<h3>Cart</h3>
			</div>
			<div id="list" className={styles.cart__content}>
				{selectedValue <= 0 ? (
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
								className={styles.cart__item__bin}
								onClick={() => setSelectedValue("0")}
							></img>
						</div>
						<button className={styles.cart__checkout}>Checkout</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Cart;
