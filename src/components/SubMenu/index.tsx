import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Select } from "antd";
import { Icon } from "@mui/material";
import { navigateTo } from "~routes/navigation";
import { useNavigate } from "react-router-dom";
import "./subMenu.css";

interface SubMenuProps {
    title: string;
}

export const SubMenu = ({ title }: SubMenuProps) => {
    const navigate = useNavigate();

    const navigateToBooking = () => {
        navigateTo("/booking", navigate);
    };

    return (
        <section className="section">
            <div className="sub__container__items">
                <div className="sub__menu__item">
                    <div className="section__item">
                        <div className="icons__">
                            <Icon
                                className="icon__menu"
                                component={FmdGoodIcon}
                                sx={{ color: "#23284C" }}
                            />
                            <h4 className="section__title">
                                Where are you headed?
                            </h4>
                        </div>
                        <Select
                            defaultValue="lucy"
                            style={{ width: 120 }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                                {
                                    value: "disabled",
                                    label: "Disabled",
                                    disabled: true,
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="sub__menu__item">
                    <div className="section__item">
                        <div className="icons__">
                            <Icon
                                className="icon__menu"
                                component={LocalMallIcon}
                                sx={{ color: "#23284C" }}
                            />
                            <h4 className="section__title">Chech in</h4>
                        </div>
                        <Select
                            defaultValue="lucy"
                            style={{ width: 120 }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                                {
                                    value: "disabled",
                                    label: "Disabled",
                                    disabled: true,
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="sub__menu__item">
                    <div className="section__item">
                        <div className="icons__">
                            <Icon
                                className="icon__menu"
                                component={LocalMallIcon}
                                sx={{ color: "#23284C" }}
                            />
                            <h4 className="section__title">Check out</h4>
                        </div>
                        <Select
                            defaultValue="lucy"
                            style={{ width: 120 }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                                {
                                    value: "disabled",
                                    label: "Disabled",
                                    disabled: true,
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="sub__menu__item">
                    <div className="section__item">
                        <div className="icons__">
                            <Icon
                                className="icon__menu"
                                component={PersonIcon}
                                sx={{ color: "#23284C" }}
                            />
                            <h4 className="section__title">
                                Rooms | Adults, Children
                            </h4>
                        </div>
                        <Select
                            defaultValue="lucy"
                            style={{ width: 120 }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                                {
                                    value: "disabled",
                                    label: "Disabled",
                                    disabled: true,
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="sub__menu__item">
                    <button className="book__now" onClick={navigateToBooking}>
                        {title}
                    </button>
                </div>
            </div>
        </section>
    );
};
