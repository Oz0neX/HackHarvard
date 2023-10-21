import { Home, Dashboard, NotFound, Signin } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="container">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signin signup />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

// File Structure
// https://blog.webdevsimplified.com/2022-07/react-folder-structure/
// Useful Youtube Video
// https://www.youtube.com/watch?v=02zO0hZmwnw
// Example project file structure
// https://github.com/mohamedsamara/mern-ecommerce
// Using Hooks
// https://www.codecademy.com/learn/react-101/modules/react-hooks-u/cheatsheet
// Why it's bad to use jquery w/ react
// https://stackoverflow.com/questions/53507205/is-it-a-bad-practice-to-use-jquery-in-reactjs
// FramerMotion - Animation library for react
// https://www.framer.com/motion/
// Put a virtual env in the backend?