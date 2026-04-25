interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorMessage = ({
  message = "Something went wrong while fetching data.",
  onRetry,
}: ErrorMessageProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "40vh",
        gap: "var(--space-lg)",
        textAlign: "center",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--color-gold-dim)"
        strokeWidth="1.5"
        strokeLinecap="round"
        style={{ width: 48, height: 48 }}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
      <p style={{ color: "var(--color-text-secondary)", fontSize: "1.1rem", maxWidth: 400 }}>
        {message}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            padding: "var(--space-sm) var(--space-xl)",
            background: "var(--surface-card)",
            border: "var(--border-accent)",
            borderRadius: "var(--radius-md)",
            color: "var(--color-gold)",
            fontFamily: "var(--font-body)",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
