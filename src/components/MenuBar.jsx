import close from '../../public/close.svg';
import PagesLinks from './PagesLinks';

function MenuBar({ handleVisibility, isVisible }) {
    return (
        <div
            className={`menu-bar ${
                isVisible ? 'open-menu-bar' : 'close-menu-bar'
            }`}
        >
            <div className="close-icon">
                <img
                    src={close}
                    alt="A close icon"
                    onClick={handleVisibility}
                />
            </div>
            <PagesLinks
                parentClassName="links-menu-bar"
                onClick={handleVisibility}
            />
        </div>
    );
}

export default MenuBar;
