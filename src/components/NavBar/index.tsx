import { useState } from "react";
import { navigateTo } from "~routes/navigation";
import { useNavigate } from "react-router-dom";
import { ROUTES_NAME } from "~constants/nameRoutes";
import IMG_LOGO from "~assets/img/logo.png";
import "./navBar.css";

export const NavBar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const navigateGeneric = (path: string, replace = true) => {
        navigateTo(path, navigate, { replace });
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="nav-bar" id="nav__bar__">
            <div className="container__nav">
                <div className="logo">
                    <a onClick={() => navigateGeneric(ROUTES_NAME.HOME)}>
                        <img src={IMG_LOGO} alt="logo" className="logo__img" />
                    </a>
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </button>
                <div className={`redirections__ ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <a
                                onClick={() =>
                                    navigateGeneric(ROUTES_NAME.HOME, false)
                                }
                            >
                                HOME
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() =>
                                    navigateGeneric(ROUTES_NAME.SERVICES, false)
                                }
                            >
                                SERVICES
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() =>
                                    navigateGeneric(ROUTES_NAME.BOOKING, false)
                                }
                            >
                                BOOKING
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() =>
                                    navigateGeneric(ROUTES_NAME.EXPLORE, false)
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
