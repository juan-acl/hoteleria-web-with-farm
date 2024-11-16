import { navigateTo } from "~routes/navigation";
import { useNavigate } from "react-router-dom";
import { ROUTES_NAME } from "~constants/nameRoutes";
import IMG_LOGO from "~assets/img/logo.png";
import "./navBar.css";

export const NavBar = () => {
    const navigate = useNavigate();

    const navigateGeneric = (path: string, replace: boolean = true) => {
        navigateTo(path, navigate, {
            replace,
        });
    };

    return (
        <nav className="nav-bar">
            <div className="container__nav">
                <div className="logo">
                    <a onClick={() => navigateGeneric(ROUTES_NAME.HOME)}>
                        <img src={IMG_LOGO} alt="logo" className="logo__img" />
                    </a>
                </div>
                <div className="redirections__">
                    <ul>
                        <li>
                            <a
                                onClick={() =>
                                    navigateGeneric(ROUTES_NAME.HOME)
                                }
                            >
                                HOME
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() =>
                                    navigateGeneric(ROUTES_NAME.SERVICES)
                                }
                            >
                                SERVICES
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() =>
                                    navigateGeneric(ROUTES_NAME.BOOKING)
                                }
                            >
                                BOOKING
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() =>
                                    navigateGeneric(ROUTES_NAME.EXPLORE)
                                }
                            >
                                EXPLORE
                            </a>
                        </li>
                        <li className="sign__up">
                            <a
                                onClick={() =>
                                    navigateGeneric(ROUTES_NAME.SIGN_UP, false)
                                }
                            >
                                Sign Up
                            </a>
                        </li>
                        <li className="sign__in">
                            <a
                                onClick={() =>
                                    navigateGeneric(ROUTES_NAME.SIGN_IN, false)
                                }
                            >
                                Sign In
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
