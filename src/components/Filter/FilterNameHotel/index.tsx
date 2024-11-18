import { Input } from "antd";
import "./filterName.css";

export const FilterByName = () => {
    return (
        <div className="container__filter__name">
            <div className="sub__container__filter__name">
                <p className="search__by_name">Search by hotel name</p>
                <Input placeholder="eg. The Fullerton Hotel" size="large" />
            </div>
        </div>
    );
};
