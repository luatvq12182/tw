import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./config/routes";

// https://itiwter.com/BaoNgoc12587/status/1719258944991023446
// twitter
// itwitter
// twiter
// => /:username/:posttype/:id

let router = createBrowserRouter(routes);

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
