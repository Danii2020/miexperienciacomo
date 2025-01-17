type Props = {
    defaultValue?: string | undefined;
    placeholder: string
    className?: string;
}

const Input = ({defaultValue, placeholder, className}: Props) => {
    return (
        <input
        className={`w-full p-4 border-[2px] border-black rounded-xl focus:outline-none mb-5 font-bold
            text-4xl ${className || ''}`}
        placeholder={placeholder}
        maxLength={100}
        defaultValue={defaultValue || ""}
        type="text"
    />
    )
}

export default Input
