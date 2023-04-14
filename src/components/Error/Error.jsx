import { Wrapper, Text } from "./Error.styled";

const Error = ({ errorText }) => {
    return (
        <Wrapper>
            <Text>{errorText}</Text>
        </Wrapper>
    );
};

export default Error;