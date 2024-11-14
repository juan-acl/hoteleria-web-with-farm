import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { rootRouter } from "./routes";
import { Provider } from "react-redux";
import { store } from "~redux/store";
import "./main.css";

export function Main() {
    const router = createBrowserRouter(rootRouter, {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
            v7_normalizeFormMethod: true,
        },
    });
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}
