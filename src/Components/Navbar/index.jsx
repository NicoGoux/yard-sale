import {NavLink, useNavigate} from 'react-router-dom';
import {useMediaQuery} from '/src/Hooks/useMediaQuerys.jsx';
import {LogoYardSale} from '/src/assets/logos/LogoYardSale';
import {Menu} from './Menu';
import {ResponsiveMenu} from './ResponsiveMenu';
import {SwitchButton} from '../SwitchButton';
import {Icon_shopping_cart} from '../../assets/icons/Icon_shopping_cart';
import {useEffect, useState} from 'react';
import './Navbar.scss';

function Navbar({theme, setTheme}) {
	const matches = useMediaQuery('(max-width: 860px)');

	const [checkboxChecked, setCheckboxChecked] = useState(false);

	useEffect(() => {
		document.documentElement.className = theme;
		if (theme === 'dark') {
			setCheckboxChecked(true);
		} else {
			setCheckboxChecked(false);
		}
	}, [theme]);

	const navigate = useNavigate();
	const isEmpty = true;
	const cartLogo = isEmpty
		? '/src/assets/icons/icon_shopping_cart.svg'
		: '/src/assets/icons/icon_shopping_cart_notification.svg';

	const onClickDarkModeButton = () => {
		if (theme === 'light') {
			setTheme('dark');
			document.cookie = 'theme=dark';
		} else {
			setTheme('light');
			document.cookie = 'theme=light';
		}
	};

	return (
		<header>
			<nav>
				{matches && (
					<ResponsiveMenu
						routes={routes}
						theme={theme}
						setTheme={setTheme}
						checkboxChecked={checkboxChecked}
					/>
				)}

				<div className='container'>
					<LogoYardSale
						otherClass='logo-container'
						onClick={() => {
							navigate('/home/all');
						}}
					/>

					{!matches && <Menu routes={routes} />}
				</div>
				<div className='container'>
					{!matches && (
						<>
							<div className='dark-mode-container'>
								<p className=''>Dark mode</p>
								<SwitchButton
									className='SwitchButton'
									onClick={onClickDarkModeButton}
									checked={checkboxChecked}
								/>
							</div>
							<ul>
								<li>
									<NavLink
										style={() => ({
											display: 'flex',
											color: 'var(--clr-green)',
											padding: '5px 10px',
											textDecoration: 'none',
											whiteSpace: 'nowrap',
										})}
										to='/login'
									>
										Log in
									</NavLink>
								</li>
							</ul>
						</>
					)}

					<button
						className='background-color-transition cart-button'
						onClick={() => {
							console.log('abrir carrito');
						}}
					>
						<Icon_shopping_cart isEmpty={true} />
					</button>
				</div>
			</nav>
		</header>
	);
}

const routes = [
	{to: '/home/all', text: 'All'},
	{to: '/home/clothes', text: 'Clothes'},
	{to: '/home/electronics', text: 'Electronics'},
	{to: '/home/furniture', text: 'Furniture'},
	{to: '/home/toys', text: 'Toys'},
	{to: '/home/others', text: 'Others'},
];

export {Navbar};
