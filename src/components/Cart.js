import React, { useState } from "react";
import styles from "./Cart.module.scss";

export const Cart = ({ addItem }) => {
	const [isEmpty, setEmpty] = useState(true);

	const CartItem = () => {
		return <div>Kafelek</div>;
	};

	return (
		<div className={styles.cart}>
			<div className={styles.cart__heading}>
				<h3>Cart</h3>
			</div>
			<div className={styles.cart__content}>
				{isEmpty ? (
					<p>Your cart is empty.</p>
				) : (
					<>
						<CartItem />
						<CartItem />
						<CartItem />
					</>
				)}
			</div>
		</div>
	);
};

export default Cart;
