import React, {useState} from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	function increment() {
		setCount(count + 1);
	}

	function decrement() {
		setCount(count - 1);
	}

};

export default Counter;