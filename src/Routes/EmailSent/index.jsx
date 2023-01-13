import {NavLink} from 'react-router-dom';
import {LogoYardSale} from '../../assets/logos/LogoYardSale';
import './EmailSent.scss';

function EmailSent() {
	return (
		<div className='login-section-container'>
			<div className='form-container'>
				<LogoYardSale otherClass={'logo-login'}></LogoYardSale>
				<p className='title-center'>Email has been sent!</p>
				<p className='text-info'>
					Please check your inbox for instructions on how to reset the password
				</p>
				<div className='email-image'>
					<img src='/src/assets/icons/email.svg' alt='email' />
				</div>
				<button className='primary-button login-button'>Log in</button>
				<p className='text-info resend'>
					<span>Didn{`'`}t receive the email?</span>
					<NavLink to='/recovery/sent'> Resend</NavLink>
				</p>
			</div>
		</div>
	);
}

export {EmailSent};
