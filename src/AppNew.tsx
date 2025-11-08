import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExploreProjects } from './pages/ExploreProjects';
import { ProjectDetails } from './pages/ProjectDetails';

function AppNew() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ExploreProjects />} />
				<Route path="/projects/:id" element={<ProjectDetails />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppNew;
