import { Helmet } from "react-helmet";
import { DetailHotel } from "~components/Hotels/DetailHotel";

export const HotelDetailPage = () => {
    return (
        <>
            <Helmet>
                <title>Hotel Detail Page</title>
                <meta name="description" content="Hotel Detail Page" />
            </Helmet>
            <DetailHotel />
        </>
    );
};
