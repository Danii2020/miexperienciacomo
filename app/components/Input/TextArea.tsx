import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
    placeholder: string;
    className?: string;
}

const TextArea = ({ placeholder, className, ...props }: Props) => {
    return (
        <textarea
            className={`w-full p-4 border-[2px] border-black rounded-xl focus:outline-none mb-5 font-bold
                text-4xl ${className || ''}`}
            placeholder={placeholder}
            {...props}
        />
    )
}

export default TextArea
