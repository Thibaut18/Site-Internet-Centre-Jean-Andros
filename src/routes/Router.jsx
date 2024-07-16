import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import GlobalLayout from "../layout/GlobalLayout";
import HomePage from "../pages/HomePage";
import ActivitesPage from "../pages/ActivitesPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import LocauxPage from "../pages/LocauxPage";
import SejoursPage from "../pages/SejoursPage";


function Routes() {
	const routes = [
		{
			path: "/",
			element: <Navigate to="/accueil" replace />,
		},
		{
			path: "/",
			element: <GlobalLayout />,
			children: [
				{
					path: "accueil",
					element: <HomePage />,
				},
				{
					path: "a-propos",
					element: <AboutPage />,
				},
				{
					path: "contact",
					element: <ContactPage />,
				},{
					path: "sejours",
					element: <SejoursPage />,
				},
				{
					path: "locaux-et-equipements",
					element: <LocauxPage />,
				},{
					path: "activites",
					element: <ActivitesPage />,
				},
			],
		},
	];
	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
}

export default Routes