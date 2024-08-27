import Logo from "./assets/logo.svg";
import LandIMG from "./assets/landing.png";

function App() {
  return (
    <>
      <div
        className="Nav"
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          gap: "15rem",
          marginTop: "1.5rem",
          boxShadow: "1px 1px 2px #e0dfdf",
          padding: "5px",
          paddingBottom: "12px",
        }}
      >
        <div
          className="logo"
          style={{ marginRight: "23rem", cursor: "pointer" }}
        >
          <img src={Logo} alt="Logo" style={{ width: "9rem" }}></img>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            gap: "2rem",
            cursor: "pointer",
          }}
        >
          <span href="/">Signup</span>
          <span href="/">About</span>
          <span href="/">Products</span>
          <span href="/">Pricing</span>
          <span href="/">Support</span>
        </div>
      </div>
      <div
        className="landingIMG"
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <img src={LandIMG} style={{ width: "65%" }}></img>
      </div>
      <div style={{ marginTop: "50px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            // marginTop: "5px",
            fontSize: "24px",
          }}
        >
          <h1>Invest in everything</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            // marginTop: "1px",
            fontSize: "24px",
          }}
        >
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          marginTop: "30px",
        }}
      >
        <button
          style={{
            backgroundColor: "#387ed1",
            borderRadius: "5px",
            padding: "12px 50px 12px 50px",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          Sign up for free
        </button>
      </div>
    </>
  );
}

export default App;
