export default function LoadingSpinner({ size = "md", color = "green" }) {
    const sizeClasses = {
        sm: "h-5 w-5 border-2",
        md: "h-12 w-12 border-4",
        lg: "h-16 w-16 border-4"
    };

    const colorClasses = {
        green: "border-green-500",
        white: "border-white",
        blue: "border-blue-500",
        red: "border-red-500"
    };

    return (
        <div className={`
            ${sizeClasses[size] || sizeClasses.md} 
            ${colorClasses[color] || colorClasses.green} 
            border-t-transparent 
            rounded-full 
            animate-spin
        `}></div>
    );
}
