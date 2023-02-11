import {NavLink, useNavigate} from 'react-router-dom';
import {LogoYardSale} from '/src/assets/logos/LogoYardSale';
import {Icon_email} from '/src/assets/icons/Icon_email';
import './EmailSent.scss';

function EmailSent() {
	const navigate = useNavigate();

	const onClickButton = () => {
		navigate('/login');
	};

	return (
		<div className='login-section-container'>
			<div className='form-container'>
				<LogoYardSale otherClass={'logo-login'}></LogoYardSale>
				<p className='title-center'>Email has been sent!</p>
				<p className='text-info'>
					Please check your inbox for instructions on how to reset the password
				</p>
				<div className='email-image'>
					<Icon_email />
				</div>
				<button className='primary-button login-button' onClick={onClickButton}>
					Log in
				</button>
				<p className='text-info resend'>
					<span>Didn{`'`}t receive the email?</span>
					<NavLink to='/login/recovery/sent'> Resend</NavLink>
				</p>
			</div>
		</div>
	);
}

export {EmailSent};
