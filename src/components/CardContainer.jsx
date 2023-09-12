import CardCount from "./CardCount";
import CardIcon from "./CardIcon";

const CardContainer = ({color = "currentColor", count = 0}) => {
    return (
        <div className="card_container">
            <CardIcon color={color}/>
            <CardCount count={count}/>
        </div>
    );
};

export default CardContainer;