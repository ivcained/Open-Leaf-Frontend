import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExploreProjects } from './pages/ExploreProjects';

function AppNew() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ExploreProjects />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppNew;
