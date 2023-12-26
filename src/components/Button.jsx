function Button({ children, isLink = false, pageLink = '' }) {
    if (!isLink) return <button className="btn">{children}</button>;
    if (isLink)
        return (
            <button className="btn">
                <a href={`#${pageLink}`}>{children}</a>
            </button>
        );
}

export default Button;
