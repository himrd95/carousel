import React, { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ images, delay, buttons, width, height }) => {
	const [newDelay, setNewDelay] = useState(delay ? delay : 2000);
	const [count, setCount] = useState(0);
	const translateRef = useRef();
	const [timing, setTiming] = useState('');
	const newButtons = buttons ? buttons : true;
	const newWidth = width ? width : 500;
	const newHeight = height ? height : 230;

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
			}, newDelay),
		);
	};
	useEffect(setTimer, [count]);

	return (
		<div
			className={styles.main}
			style={{ width: `${newWidth}px`, height: `${newHeight}px` }}
		>
			<div className={styles.container}>
				<div
					ref={translateRef}
					style={{
						display: 'flex',
						width: 'fit-content',
						height: '100%',
						transition: '.3s',
					}}
				>
					{images?.map((image) => (
						<img
							style={{
								width: `${newWidth}px`,
								height: `${newHeight}px`,
							}}
							src={image}
							alt=''
						/>
					))}
				</div>
				{newButtons && (
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
