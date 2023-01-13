import {NavLink} from 'react-router-dom';
import './Menu.scss';

function Menu({routes}) {
	return (
		<ul>
			{routes.map((route) => (
				<li key={route.to}>
					<NavLink
						style={({isActive}) => ({
							display: 'flex',
							color: isActive ? 'var(--clr-green)' : 'var(--clr-very-light-pink)',
							borderStyle: isActive && 'solid',
							borderRadius: isActive && '20px',
							padding: '5px 10px',
							textDecoration: 'none',
						})}
						to={route.to}
					>
						{route.text}
					</NavLink>
				</li>
			))}
		</ul>
	);
}

export {Menu};
