import './SwitchButton.scss';

function SwitchButton({className, onClick, checked}) {
	return (
		<div className={`switch-button ${className ? className : ''}`}>
			<input
				type='checkbox'
				name='switch'
				id='switch-label'
				className='switch-checkbox'
				checked={checked}
				onChange={() => {
					return;
				}}
			/>
			<label htmlFor='switch-label' className='switch-label' onClick={onClick}></label>
		</div>
	);
}

export {SwitchButton};
