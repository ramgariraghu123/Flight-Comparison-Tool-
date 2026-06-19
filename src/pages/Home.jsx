import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#021024,#052659,#5483B3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <div
        style={{
          textAlign: "center",
          background: "rgba(255,255,255,0.05)",
          padding: "40px 60px 60px 60px",
          borderRadius: "20px",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <div
          style={{
            fontSize: "55px",
            marginBottom: "5px",
          }}
        >
          ✈
        </div>

        <h1
          style={{
            fontSize: "65px",
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "0px",
          }}
        >
          SkyCompare
        </h1>

        <p
          style={{
            fontSize: "22px",
            marginTop: "10px",
            marginBottom: "40px",
          }}
        >
          Compare & Book Flights at Best Prices
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/login">
            <button
              style={{
                padding: "15px 35px",
                borderRadius: "12px",
                border: "none",
                background: "#00C9FF",
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button
              style={{
                padding: "15px 35px",
                borderRadius: "12px",
                border: "none",
                background: "#00C9FF",
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </Link>

          <Link to="/flights">
            <button
              style={{
                padding: "15px 35px",
                borderRadius: "12px",
                border: "none",
                background: "#00C9FF",
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Search Flights
            </button>
          </Link>
        </div>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            gap: "40px",
            justifyContent: "center",
            flexWrap: "wrap",
            fontSize: "18px",
          }}
        >
          <div>✈ Best Flight Deals</div>
          <div>💳 Secure Booking</div>
          <div>🌍 Global Destinations</div>
        </div>
      </div>
    </div>
  );
}

export default Home;