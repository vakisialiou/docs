
function Button(props) {
    return (
        <button
            className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 border px-8 py-1 font-normal text-sm min-w-40 text-nowrap"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button