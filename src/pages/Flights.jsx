import { useState } from "react";
import FlightCard from "../components/FlightCard";
import flightsData from "../data/flights";

const airports = [
"Delhi",
"Mumbai",
"Bangalore",
"Hyderabad",
"Chennai",
"Kolkata",
"Ahmedabad",
"Pune",
"Goa",
"Jaipur",
"Lucknow",
"Visakhapatnam",
"Coimbatore",
"Indore",
"Nagpur",
];

function Flights() {
const [from, setFrom] = useState("");
const [to, setTo] = useState("");
const [results, setResults] = useState([]);
const [bestFlight, setBestFlight] = useState(null);

const searchFlights = () => {
let filtered = flightsData.filter(
(flight) =>
flight.from === from &&
flight.to === to
);


// If route doesn't exist, generate demo comparison flights
if (filtered.length === 0) {
  filtered = [
    {
      airline: "IndiGo",
      from,
      to,
      time: "06:00 AM - 08:00 AM",
      price: 4500,
    },
    {
      airline: "Air India",
      from,
      to,
      time: "09:00 AM - 11:15 AM",
      price: 5200,
    },
    {
      airline: "Vistara",
      from,
      to,
      time: "01:00 PM - 03:00 PM",
      price: 4900,
    },
    {
      airline: "Akasa Air",
      from,
      to,
      time: "06:30 PM - 08:45 PM",
      price: 4700,
    },
  ];
}

setResults(filtered);

const cheapest = filtered.reduce((a, b) =>
  a.price < b.price ? a : b
);

setBestFlight(cheapest);


};

return (
<div
style={{
minHeight: "100vh",
background: "#040D1A",
color: "white",
padding: "30px",
}}
>
<h1 style={{ textAlign: "center" }}>
✈ SkyCompare </h1>


  <div
    style={{
      background: "#0F2444",
      padding: "20px",
      borderRadius: "10px",
      marginBottom: "30px",
    }}
  >
    <h2>Search Flights</h2>

    <select
      value={from}
      onChange={(e) => setFrom(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <option value="">
        Select Departure
      </option>

      {airports.map((airport) => (
        <option key={airport} value={airport}>
          {airport}
        </option>
      ))}
    </select>

    <select
      value={to}
      onChange={(e) => setTo(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <option value="">
        Select Destination
      </option>

      {airports.map((airport) => (
        <option key={airport} value={airport}>
          {airport}
        </option>
      ))}
    </select>

    <input
      type="date"
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "10px",
      }}
    />

    <button
      onClick={searchFlights}
      style={{
        width: "100%",
        padding: "12px",
        background: "#00C9FF",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "bold",
      }}
    >
      Search Flights
    </button>
  </div>

  {bestFlight && (
    <div
      style={{
        background: "#1E3A8A",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>🏆 Best Flight Recommendation</h2>

      <p>
        <strong>Airline:</strong> {bestFlight.airline}
      </p>

      <p>
        <strong>Route:</strong> {bestFlight.from} ➜ {bestFlight.to}
      </p>

      <p>
        <strong>Time:</strong> {bestFlight.time}
      </p>

      <p>
        <strong>Price:</strong> ₹{bestFlight.price}
      </p>

      <p>
        Cheapest available flight for this route.
      </p>
    </div>
  )}

  {results.length === 0 ? (
    <h3 style={{ textAlign: "center" }}>
      Select airports and click Search Flights
    </h3>
  ) : (
    results.map((flight, index) => (
      <FlightCard
        key={index}
        airline={flight.airline}
        from={flight.from}
        to={flight.to}
        time={flight.time}
        price={flight.price}
      />
    ))
  )}
</div>


);
}

export default Flights;
