import { LoadMore } from "./Button.styled";

const Button = ({ fetchMore }) => {
return (
    <LoadMore 
    type="button" 
    onClick={fetchMore}
    >Load more</LoadMore>
)
};

export default Button;