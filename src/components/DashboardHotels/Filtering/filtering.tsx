import { FilterByName } from "~components/Filter/FilterNameHotel";
import "./filtering.css";

export const Filtering = () => {
    return (
        <div className="container__filtering">
            <FilterByName />
            <h5 className="text__filter__by__result">Filter result</h5>
            <div className="sub__conteiner__filter__by__price__and__stars">
                <div className="item__filtering">
                    <h5 className="text__price__range">Price Range</h5>
                </div>
                <div className="items__star__raiting">
                    <div className="item__star__raiting">
                        <input type="checkbox" name="star" id="star1" />
                        <label htmlFor="star1">1 Star</label>
                    </div>
                    <div className="item__star__raiting">
                        <input type="checkbox" name="star" id="star2" />
                        <label htmlFor="star2">2 Star</label>
                    </div>
                    <div className="item__star__raiting">
                        <input type="checkbox" name="star" id="star3" />
                        <label htmlFor="star3">3 Star</label>
                    </div>
                    <div className="item__star__raiting">
                        <input type="checkbox" name="star" id="star4" />
                        <label htmlFor="star4">4 Star</label>
                    </div>
                </div>
            </div>
            <div className="sub__conteiner__filter__by__price__and__stars">
                <div className="item__filtering">
                    <h5 className="text__price__range">Star Rating</h5>
                </div>
                <div className="items__star__raiting">
                    <div className="item__star__raiting">
                        <input type="checkbox" name="star" id="star1" />
                        <label htmlFor="star1">1 Star</label>
                    </div>
                    <div className="item__star__raiting">
                        <input type="checkbox" name="star" id="star2" />
                        <label htmlFor="star2">2 Star</label>
                    </div>
                    <div className="item__star__raiting">
                        <input type="checkbox" name="star" id="star3" />
                        <label htmlFor="star3">3 Star</label>
                    </div>
                    <div className="item__star__raiting">
                        <input type="checkbox" name="star" id="star4" />
                        <label htmlFor="star4">4 Star</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
