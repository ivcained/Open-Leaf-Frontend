import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExploreProjects } from './pages/ExploreProjects';
import { ProjectDetails } from './pages/ProjectDetails';
import { AddProject } from './pages/AddProject';

function AppNew() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ExploreProjects />} />
				<Route path="/projects/:id" element={<ProjectDetails />} />
				<Route path="/add-project" element={<AddProject />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppNew;
