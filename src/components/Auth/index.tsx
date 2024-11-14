import { Loader } from "~components/Loader";
import { currentUserSelector } from "~redux/selectors/auth.selector";
import { useAppSelector } from "~redux/store";

export const Auth = () => {
    const authState = useAppSelector(currentUserSelector);
    console.log(authState);
    return (
        <div>
            <h1>Auth</h1>
            <Loader />
        </div>
    );
};
