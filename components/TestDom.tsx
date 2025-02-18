"use dom";

import type { DOMProps } from "expo/dom";

type Props = {
	dom?: DOMProps;
};

const TestDom = (props: Props) => {
	return (
		<div>
			<h1>This renders in the DOM? 🤯</h1>
			{new Array(100).fill(0).map((_, index) => (
				<div key={index.toString()}>Key {index}</div>
			))}
		</div>
	);
};

export default TestDom;
