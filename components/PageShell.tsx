type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageShell({
  children,
  className = "bg-pearl",
}: PageShellProps) {
  return (
    <main className={`flex-1 pt-[4.25rem] ${className}`}>{children}</main>
  );
}
