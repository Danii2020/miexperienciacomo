import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    className?: string;
}

const Input = ({ placeholder, className, ...props }: Props) => {
    return (
        <input
            className={`w-full p-4 border-[2px] border-black rounded-xl focus:outline-none mb-5 font-bold
                text-4xl ${className || ''}`}
            placeholder={placeholder}
            {...props}
            type={props.type || "text"}
        />
    )
}

export default Input
