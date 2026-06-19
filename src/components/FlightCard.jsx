function FlightCard({ airline, from, to, time, price }) {
  return (
    <div
      style={{
        background: "#0F2444",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "15px",
        color: "white",
      }}
    >
      <h2 style={{ color: "#052659" }}>{airline}</h2>

      <p>
        {from} ➜ {to}
      </p>

      <p>{time}</p>

      <h1 style={{ color: "#00C9FF" }}>₹{price}</h1>

      <button
  onClick={() =>
    alert(
      `Flight booked successfully!\nAirline: ${airline}\nPrice: ₹${price}`
    )
  }
  style={{
    background: "white",
  color: "#021024",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 0 15px rgba(0,0,0,0.2)",
  marginBottom: "20px",
  }}
>
  Book Now
</button>
        <button
  style={{
    marginLeft: "10px",
    padding: "10px",
    background: "#00C9FF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }}
>
  Compare
</button>
    </div>
  );
}

export default FlightCard;