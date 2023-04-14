import PacmanLoader from "react-spinners/PacmanLoader";
import { Wrapper } from "./Loader.styled";

const Loader = () => {
    return (
        <Wrapper>
            <PacmanLoader color="#ffb766" />
        </Wrapper>
    );
};

export default Loader;