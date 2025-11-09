import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExploreProjects } from './pages/ExploreProjects';
import { ProjectDetails } from './pages/ProjectDetails';
import { AddProject } from './pages/AddProject';
import { Admin } from './pages/Admin';
import { TaskDetails } from './pages/TaskDetails';

function AppNew() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ExploreProjects />} />
				<Route path="/projects/:id" element={<ProjectDetails />} />
				<Route path="/projects/:projectId/tasks/:taskId" element={<TaskDetails />} />
				<Route path="/add-project" element={<AddProject />} />
				<Route path="/admin" element={<Admin />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppNew;
