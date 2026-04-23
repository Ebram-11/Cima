import React from "react";

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h3>Digital Ticket</h3>
      <img src={ticket.qrCodeData} alt="QR Code" />
      <p>Booking Reference: {ticket.bookingId}</p>
    </div>
  );
};

export default Ticket;
