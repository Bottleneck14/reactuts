export default function Notfound() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        className="404-body"
      >
        <h2 style={{ fontSize: "100px" }}>404</h2>
        <h6 style={{ fontSize: "18px" }}>Page not found</h6>
      </div>
    </>
  );
}
