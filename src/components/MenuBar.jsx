// import close from '../assets/close.svg';
import PagesLinks from './PagesLinks';

function MenuBar({ handleVisibility, isVisible }) {
    return (
        <div
            className={`menu-bar ${
                isVisible ? 'open-menu-bar' : 'close-menu-bar'
            }`}
        >
            <div className="close-icon">
                <i className="ri-close-line"></i>
            </div>
            <PagesLinks
                parentClassName="links-menu-bar"
                onClick={handleVisibility}
            />
        </div>
    );
}

export default MenuBar;
