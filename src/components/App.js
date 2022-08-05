import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
	const [selectedValue, setSelectedValue] = useState("0");

	return (
		<>
			<Header selectedValue={selectedValue} />
			<Content setSelectedValue={setSelectedValue} />
			<Footer />
		</>
	);
}

export default App;
