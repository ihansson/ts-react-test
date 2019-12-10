import { useState, useEffect } from 'react';

export default function useWindowWidth(): number {

	const [width, setWidth]: [number, (x: number) => void] = useState(window.innerWidth);

	useEffect(() => {
		console.log('test');
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, []);

	return width;

}