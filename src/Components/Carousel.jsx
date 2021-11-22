import React, { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({
	images,
	delay = 2000,
	buttons = true,
	width = 500,
	height = 230,
}) => {
	const [count, setCount] = useState(0);
	const translateRef = useRef();
	const [timing, setTiming] = useState('');

	const handleClick = (val) => {
		setTiming(clearTimeout(timing));
		let newCount = count;

		if (val === 'forward') {
			newCount++;
			setCount(newCount);
		} else if (val === 'backward') {
			newCount--;
			setCount(newCount);
		}

		if (newCount === images.length) {
			setCount(0);
			translateRef.current.style.transform = 'translate(0)';
			return;
		}
		if (newCount === -1) {
			setCount(images.length - 1);
			translateRef.current.style.transform = `translate(-${
				(images.length - 1) * (100 / images.length)
			}%)`;
			return;
		}

		translateRef.current.style.transform = `translate(-${
			newCount * (100 / images.length)
		}%)`;
	};

	const setTimer = () => {
		setTiming(clearTimeout(timing));
		setTiming(
			setTimeout(() => {
				setCount(count + 1);
				handleClick('forward');
			}, delay),
		);
	};
	useEffect(setTimer, [count]);

	return (
		<div
			className={styles.main}
			style={{ width: `${width}px`, height: `${height}px` }}
		>
			<div className={styles.container}>
				<div ref={translateRef} className={styles.imageContainer}>
					{images?.map((image) => (
						<img
							style={{
								width: `${width}px`,
								height: `${height}px`,
							}}
							src={image}
							alt={image}
						/>
					))}
				</div>
				{buttons && (
					<div className={styles.buttons}>
						<button
							className={styles.leftBtn}
							onClick={() => handleClick('backward')}
						>
							<i class='fas fa-chevron-circle-left'></i>
						</button>
						<button
							className={styles.rightBtn}
							onClick={() => handleClick('forward')}
						>
							<i class='fas fa-chevron-circle-right'></i>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Carousel;
