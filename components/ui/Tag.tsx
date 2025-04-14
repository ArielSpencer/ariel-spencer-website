"use client";

type TagVariant = "accent" | "primary" | "secondary" | "outline";
type TagSize = "sm" | "md" | "lg";

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  className?: string;
  mb?: 0 | 2 | 4 | 6 | 8;
  onClick?: () => void;
  hover?: boolean;
  cursor?: boolean;
}

export default function Tag({
  children,
  variant = "accent",
  size = "md",
  className = "",
  mb = 0,
  onClick,
  hover = false,
  cursor = false,
}: TagProps) {
  const baseClasses = "inline-block rounded-full font-medium";

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-sm",
  };

  const marginClasses = {
    0: "",
    2: "mb-2",
    4: "mb-4",
    6: "mb-6",
    8: "mb-8",
  };

  const variantClasses = {
    accent: "bg-[var(--color-bg-secondary)] text-[var(--color-accent)]",
    primary: "bg-[var(--color-accent)] text-[var(--color-text-light)]",
    secondary: "bg-[var(--color-btn-secondary)] text-[var(--color-text-light)]",
    outline: "bg-white shadow-sm border border-gray-100 text-[var(--color-text-body)]",
  };

  const hoverClasses = hover 
    ? variant === "accent" 
      ? "hover:outline hover:outline-[var(--color-btn-accent-hover)] transition-colors" 
      : variant === "primary"
        ? "hover:bg-[var(--color-btn-primary-hover)] transition-colors"
        : variant === "secondary"
          ? "hover:bg-[var(--color-btn-secondary-hover)] transition-colors"
          : variant === "outline"
            ? "hover:border-[var(--color-accent)] transition-colors"
            : ""
    : "";

  const cursorClasses = onClick || cursor ? "cursor-pointer" : "";

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${marginClasses[mb]} ${hoverClasses} ${cursorClasses} ${className}`;

  return (
    <div 
      className={combinedClasses}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}