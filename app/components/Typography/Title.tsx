interface Props {
    children: React.ReactNode;
    className?: string;
};

const Title = ({ children, className }: Props) => {
    return (
        <h1 className={`font-bold text-4xl mb-8 ${className || ''}`}>
            {children}
        </h1>
    );
};

export default Title;
