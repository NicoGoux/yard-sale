import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Home} from './Home';
import {Login} from './Login';
import {NotFound} from './NotFound';
import {Navbar} from '../Components/Navbar';
import {PasswordRecovery} from './PasswordRecovery';
import {EmailSent} from './EmailSent';
import {NewPassword} from './NewPassword';
import {ProductGrid} from '../Components/ProductGrid';
import {useState} from 'react';

function App() {
	const [theme, setTheme] = useState(
		document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*=\s*([^;]*).*$)|^.*$/, '$1') || 'light'
	);

	return (
		<>
			<HashRouter>
				<Navbar theme={theme} setTheme={setTheme} />

				<Routes>
					<Route path='/' element={<Navigate to={'/home/all'} replace={true} />}></Route>
					<Route
						path='/home'
						element={<Navigate to={'/home/all'} replace={true} />}
					></Route>
					<Route path='/home/:slug' element={<Home />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/recovery' element={<PasswordRecovery />}></Route>
					<Route path='/recovery/sent' element={<EmailSent />}></Route>
					<Route path='/recovery/password' element={<NewPassword />}></Route>
					<Route path='/product' element={<ProductGrid />}></Route>
					<Route path='*' element={<NotFound />}></Route>
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
