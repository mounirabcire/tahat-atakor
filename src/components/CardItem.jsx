

function CardItem({ cardContent }) {
    const { title, body, imgSrc } = cardContent;

    return (
        <div className="col-12 col-lg-4">
            <div className="card">
                <img src={imgSrc} alt="A background" />
                <div className="bg-back">
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">{body}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardItem;
