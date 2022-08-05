import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
	const [selectedValue, setSelectedValue] = useState("0");

	return (
		<>
			<Header
				selectedValue={selectedValue}
				setSelectedValue={setSelectedValue}
			/>
			<Content
				selectedValue={selectedValue}
				setSelectedValue={setSelectedValue}
			/>
			<Footer />
		</>
	);
}

export default App;
