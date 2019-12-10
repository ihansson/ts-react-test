import React, { useState } from 'react';

export default function App() {
	const [count, setCount] = useState(5);
	return <div>
		Test {count}
		<button onClick={() => { setCount(count-1) }}>Subtract</button>
		<button onClick={() => { setCount(count+1) }}>Add</button>
	</div>;
}
