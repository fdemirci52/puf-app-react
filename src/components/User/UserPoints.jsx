export default function UserPoints({ points, className = "", children, ...props }) {
  return (
    <span className={className} {...props}>{points}{children}</span>
  );
} 