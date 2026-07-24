import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 70 }}>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you requested does not exist.
        </p>

        <br />

        <Link href="/">
          Return Home
        </Link>
      </div>
    </main>
  );
}