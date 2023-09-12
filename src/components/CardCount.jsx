const CardCount = ({count = 0}) => {
    return (
        <div className='card_container_count'>
            <span>
                {count}
            </span>
        </div>
    );
};

export default CardCount;