import { Hotel } from "~components/Hotels";
import { SubMenu } from "~components/SubMenu";
import "./home.css";

export const Home = () => {
    return (
        <>
            <div className="container__home">
                <div className="img__home">
                    <div className="resume">
                        <h4 className="h4__title">
                            Chase elegant. Reserve your dream staty now.
                        </h4>
                        <span className="span__description">
                            Discover the finest hotels from all over the world.{" "}
                        </span>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <SubMenu />
            </div>
            <div className="container__resumn__hotels">
                <h3 className="text__top__rated">Top Rated</h3>
                <div className="top__rated__line"></div>
                <div className="hotel__container__home">
                    <Hotel />
                </div>
            </div>
            <div className="container__resumn__hotels">
                <h3 className="text__top__rated">Category</h3>
                <div className="top__rated__line"></div>
                <div className="hotel__container__home">
                    <Hotel />
                </div>
            </div>
        </>
    );
};
