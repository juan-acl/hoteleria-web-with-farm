import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rootRouter } from "./routes";
import { Provider } from "react-redux";
import { store } from "~redux/store";
import "./main.css";

export function Main() {
    return (
        <Provider store={store}>
            <RouterProvider router={createBrowserRouter(rootRouter)} />
        </Provider>
    );
}
