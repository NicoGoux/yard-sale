import {NavLink} from 'react-router-dom';
import './ResponsiveMenu.scss';
import {useState} from 'react';
import {SwitchButton} from '../../SwitchButton';
import {Icon_menu} from '/src/assets/icons/Icon_menu/index.jsx';
import {Icon_close} from '../../../assets/icons/Icon_close';

function ResponsiveMenu({routes, theme, setTheme, checkboxChecked}) {
	const [showSideBar, setShowSideBar] = useState(false);

	const onClickOpenSideBarButton = () => {
		setShowSideBar(true);
	};

	const onClickCloseSideBarButton = () => {
		setShowSideBar(false);
	};

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
		<>
			<aside className={`sidebar ${showSideBar && 'show-sidebar'}`}>
				<button className='close-side-bar-button' onClick={onClickCloseSideBarButton}>
					<Icon_close />
				</button>
				<h2>CATEGORIES</h2>
				<nav>
					<ul>
						{routes.map((route) => (
							<li key={route.to}>
								<NavLink
									className='NavLink'
									to={route.to}
									onClick={onClickCloseSideBarButton}
								>
									{route.text}
								</NavLink>
							</li>
						))}
					</ul>

					<ul>
						<li>
							<NavLink
								className='NavLink-login'
								to='/login'
								onClick={onClickCloseSideBarButton}
							>
								Log in
							</NavLink>
						</li>
					</ul>
				</nav>
				<div className='dark-mode-container'>
					<p className=''>Dark mode</p>
					<SwitchButton onClick={onClickDarkModeButton} checked={checkboxChecked} />
				</div>
			</aside>
			<button
				className={`open-side-bar-button ${showSideBar && 'hide-open-side-bar-button'}`}
				onClick={onClickOpenSideBarButton}
			>
				<Icon_menu></Icon_menu>
			</button>
		</>
	);
}

export {ResponsiveMenu};
