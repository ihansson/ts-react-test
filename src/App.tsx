import React, { useState, useEffect } from 'react';
import useWindowWidth from './useWindowWidth';

export default function App() {
	const [count, setCount]: [number, (x: number) => void] = useState(5);
	const width: number = useWindowWidth();

	useEffect(() => {
		document.title = count;
	}, [count])

	return <div>
		<div>
			Test {count}
		</div>
		<div>
			<button onClick={() => { setCount(count-1) }}>Subtract</button>
			<button onClick={() => { setCount(count+1) }}>Add</button>
		</div>
		Window width: {width}
	</div>;
}
