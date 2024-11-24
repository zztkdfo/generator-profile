interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  radius?: "none" | "small" | "medium" | "large" | "full";
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  size = "medium",
  radius = "medium",
  type = "button",
  className = "",
}: ButtonProps) {
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/80",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  const sizeStyles = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };

  const radiusStyles = {
    none: "rounded-none",
    small: "rounded",
    medium: "rounded-md",
    large: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center font-medium transition-all
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${radiusStyles[radius]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
