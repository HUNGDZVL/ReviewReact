import './Item.scss';

function Item(props) {
    return (
        <div className="item__parent">
            <div className="item__bg">
                <img src={props.image} alt="bg-img" />
            </div>
            <footer className="ft__item">
                <div className="item__avt">
                    <img src={props.avatar} alt="avatar" />
                </div>
                <div className="item__text">
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                </div>
            </footer>
        </div>
    );
}

export default Item;
