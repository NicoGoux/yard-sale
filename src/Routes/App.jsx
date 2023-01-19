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
import {AppProvider} from '../Context/AppContext';
import {CreateAccount} from './CreateAccount';

function App() {
	const [theme, setTheme] = useState(
		document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*=\s*([^;]*).*$)|^.*$/, '$1') || 'light'
	);

	return (
		<>
			<HashRouter>
				<AppProvider>
					<Navbar theme={theme} setTheme={setTheme} />

					<Routes>
						<Route path='/' element={<Navigate to={'/home/all'} replace={true} />} />
						<Route
							path='/home'
							element={<Navigate to={'/home/all'} replace={true} />}
						/>
						<Route path='/home' element={<Home />}>
							<Route path='all' element={<ProductGrid slug={'all'} />} />
							<Route path='clothes' element={<ProductGrid slug={'clothes'} />} />
							<Route
								path='electronics'
								element={<ProductGrid slug={'electronics'} />}
							/>
							<Route path='furniture' element={<ProductGrid slug={'furniture'} />} />
							<Route path='toys' element={<ProductGrid slug={'toys'} />} />
							<Route path='others' element={<ProductGrid slug={'others'} />} />
						</Route>
						<Route path='/login' element={<Login />}></Route>
						<Route path='/login/create-account' element={<CreateAccount />}></Route>
						<Route path='/login/recovery' element={<PasswordRecovery />}></Route>
						<Route path='/login/recovery/sent' element={<EmailSent />}></Route>
						<Route path='/login/recovery/password' element={<NewPassword />}></Route>
						<Route path='/product' element={<ProductGrid />}></Route>
						<Route path='*' element={<NotFound />}></Route>
					</Routes>
				</AppProvider>
			</HashRouter>
		</>
	);
}

export default App;
