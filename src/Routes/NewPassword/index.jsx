import {LogoYardSale} from '/src/assets/logos/LogoYardSale';

function NewPassword() {
	return (
		<div className='login-section-container'>
			<div className='form-container'>
				<LogoYardSale otherClass={'logo-login'}></LogoYardSale>
				<p className='title-center'>Create a new password</p>
				<p className='text-info'>Enter a new password for your account</p>
				<form className='form'>
					<label htmlFor='email' className='label'>
						Password
					</label>
					<input
						type='password'
						id='password'
						placeholder='*********'
						className='input input-password'
					/>

					<label htmlFor='re-enter-password' className='label'>
						Re-enter password
					</label>
					<input
						type='re-enter-password'
						id='re-enter-password'
						placeholder='*********'
						className='input input-password'
					/>

					<input type='submit' value='Log in' className='primary-button login-button' />
				</form>
			</div>
		</div>
	);
}

export {NewPassword};
