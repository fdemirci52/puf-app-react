export default function UsernameBadge({ username, className = "", children, ...props }) {
  return (
    <span className={className} {...props}>{username}{children}</span>
  );
} 