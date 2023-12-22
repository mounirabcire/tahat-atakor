import close from '../../public/close.svg';

function MenuBar({ setIsVisible, isVisible }) {
    return (
        <div className={`menu-bar ${isVisible ? 'open-menu-bar' : 'close-menu-bar'}`}>
            <div className="close-icon">
                <img
                    src={close}
                    alt="A close icon"
                    onClick={() => setIsVisible(pre => !pre)}
                />
            </div>
            <div className="links">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About us</a>
                    </li>
                    <li>
                        <a href="#cars">Cars</a>
                    </li>
                    <li>
                        <a href="#book">Book now</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MenuBar;
