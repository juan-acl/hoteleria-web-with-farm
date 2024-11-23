import { Helmet } from "react-helmet";
import { Home } from "~components/Home";

export const HomePage = (): JSX.Element => {
    return (
        <>
            <Helmet>
                <title>Hotel Page</title>
                <meta name="description" content="Hotel Page" />
            </Helmet>
            <Home />
        </>
    );
};
