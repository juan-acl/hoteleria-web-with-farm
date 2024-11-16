import { navigateTo } from "~routes/navigation";
import { useNavigate } from "react-router-dom";
import "./navBar.css";
import { ROUTES_NAME } from "~constants/nameRoutes";

export const NavBar = () => {
    const navigate = useNavigate();

    const navigateGeneric = (path: string, replace: boolean = true) => {
        navigateTo(path, navigate, {
            replace,
        });
    };

    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <a onClick={() => navigateGeneric(ROUTES_NAME.HOME)}>
                        HOME
                    </a>
                </li>
                <li>
                    <a onClick={() => navigateGeneric(ROUTES_NAME.SERVICES)}>
                        SERVICES
                    </a>
                </li>
                <li>
                    <a onClick={() => navigateGeneric(ROUTES_NAME.BOOKING)}>
                        BOOKING
                    </a>
                </li>
                <li>
                    <a onClick={() => navigateGeneric(ROUTES_NAME.EXPLORE)}>
                        EXPLORE
                    </a>
                </li>
                <li>
                    <a
                        onClick={() =>
                            navigateGeneric(ROUTES_NAME.SIGN_UP, false)
                        }
                    >
                        SIGN UP
                    </a>
                </li>
                <li>
                    <a
                        onClick={() =>
                            navigateGeneric(ROUTES_NAME.SIGN_IN, false)
                        }
                    >
                        SIGN IN
                    </a>
                </li>
            </ul>
        </nav>
    );
};
