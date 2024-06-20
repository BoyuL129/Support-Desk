import { useSelector, useDispatch } from "react-redux";
import { getTicket, closeTicket } from "../features/tickets/ticketSlice";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Ticket() {
  const { ticket } = useSelector((state) => state.tickets);
  const { ticketId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTicket(ticketId)).unwrap().catch(toast.error);
    // dispatch(getTicket(ticketId)).unwrap().catch(toast.error);
  }, [ticketId, dispatch]);

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/tickets" />
        <h2>
          Ticket ID: {ticket._id}
          <span>
            className={`status status-${ticket.status}`}
            {ticket.status}
          </span>
        </h2>
      </header>
    </div>
  );
}

export default Ticket;
