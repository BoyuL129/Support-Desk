const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// @desc Get user tickets
// @route GET /api/tickets
// @access private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ Messsage: "get tickets" });
});

// @desc Create new ticket
// @route POST /api/tickets
// @access private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ Messsage: "Create tickets" });
});

module.exports = {
  getTickets,
  createTicket,
};
