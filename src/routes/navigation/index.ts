import { NavigateFunction, NavigateOptions } from "react-router-dom";
import { ROUTES_NAME } from "~constants/nameRoutes";

export const navigateToHome = (navigate: NavigateFunction) => {
    navigate(ROUTES_NAME.HOME, { replace: true });
};

/**
 *
 * @param path url to navigate
 * @param navigate function for navigate
 * @param options additional option for navigate for example replace and state
 */
export const navigateTo = (
    path: string,
    navigate: NavigateFunction,
    options?: NavigateOptions,
) => {
    navigate(path, options);
};
