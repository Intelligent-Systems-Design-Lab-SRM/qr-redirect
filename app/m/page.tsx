export default function QRHome() {
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
        <h1>Invalid QR Code</h1>

        <p>Please scan a valid ISD Lab QR code.</p>
      </div>
    </main>
  );
}