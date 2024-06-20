import { useSelector, useDispatch } from "react-redux";
import { getTickets } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import { useEffect } from "react";
import TicketItem from "../components/TicketItem";

function Tickets() {
  const { tickets } = useSelector((state) => state.tickets);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  return (
    <>
      <BackButton url="/" />
      <h1> Tickets </h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets && tickets.length > 0 ? (
          tickets.map((ticket) => (
            <TicketItem key={ticket._id} ticket={ticket} />
          ))
        ) : (
          <div>No tickets available</div>
        )}
      </div>
    </>
  );
}

export default Tickets;
