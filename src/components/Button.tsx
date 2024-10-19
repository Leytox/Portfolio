interface buttonTypes {
    title: string,
    handleClick: () => void,
    styles: string,
    shadowColor: string
}

export default function Button({title, handleClick, styles, shadowColor}: buttonTypes) {
    return (
        <button
            onClick={handleClick}
            className={`rounded-xl p-2 text-2xl font-bold duration-300 transition-all ease-in-out ${styles}`}
            style={{boxShadow: `5px 4px 0px ${shadowColor}`}}
        >
            {title}
        </button>
    );
}
