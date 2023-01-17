import {useEffect, useState} from 'react';
import './DetailImage.scss';

function DetailImage({productDetail, images}) {
	const [imageIndex, setImageIndex] = useState(0);

	useEffect(() => {
		setImageIndex(0);
	}, [productDetail]);

	const onClickNextImageButton = () => {
		if (imageIndex < images.length - 1) {
			document.querySelector('.detail-image-container').style.backgroundImage = `url(${
				images[imageIndex + 1]
			})`;
			setImageIndex(imageIndex + 1);
		}
	};

	const onClickPrevImageButton = () => {
		if (imageIndex > 0) {
			document.querySelector('.detail-image-container').style.backgroundImage = `url(${
				images[imageIndex - 1]
			})`;
			setImageIndex(imageIndex - 1);
		}
	};

	return (
		<>
			<div className='detail-image-container' style={{backgroundImage: `url(${images[0]})`}}>
				<button className='arrow-buttons' onClick={onClickPrevImageButton}>
					<div className='arrow-button arrow-button--l'></div>
				</button>

				<button className='arrow-buttons' onClick={onClickNextImageButton}>
					<div className='arrow-button arrow-button--r'></div>
				</button>
			</div>
			<div className='images-circles-container'>
				{images.map((value, index) => (
					<div
						key={index}
						className={`images-circles ${
							index === imageIndex && 'active-image-circle'
						}`}
					></div>
				))}
			</div>
		</>
	);
}

export {DetailImage};
