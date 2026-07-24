import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f8fafc",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "48px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,.08)",
          maxWidth: "700px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 42 }}>QR Redirect Service</h1>

        <p style={{ marginTop: 16, fontSize: 18 }}>
          Intelligent Systems Design Lab
        </p>

        <p style={{ color: "#666", marginTop: 20 }}>
          This service powers the dynamic QR codes printed on ISD Lab,
          RoboFest and club merchandise.
        </p>

        <div
          style={{
            marginTop: 40,
            padding: 20,
            background: "#f3f4f6",
            borderRadius: 12,
          }}
        >
          <strong>Status</strong>

          <br />

          🟢 Online
        </div>

        <div style={{ marginTop: 30 }}>
          <Link href="https://robofest.in">
            RoboFest
          </Link>

          {" • "}

          <Link href="https://isdlabsrm.in">
            ISD Lab
          </Link>
        </div>
      </div>
    </main>
  );
}