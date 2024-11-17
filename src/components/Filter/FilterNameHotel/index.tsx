import { Input } from "antd";

export const FilterByName = () => {
    return (
        <div className="container__filter__name">
            <Input placeholder="Search by hotel name" size="large" />
        </div>
    );
};
