const { constantService: constantService } = require('../const');
const utilService = require('./utils');

/**
 *
 * @param usersData
 * @param tickets
 * @param type
 */
function transformTicketsForUser(users, tickets) {
  if (!users && !Array.isArray(users)) {
    return null;
  }

  if (!tickets && !Array.isArray(tickets)) {
    return users;
  }

  return users.map((user) => {
    if (user) {
      user = transformAssigneAndSubmitteeForAUser(user, tickets);
    }

    return user;
  });
}

/**
 *
 * @param {*} user
 * @param {*} tickets
 */
function transformAssigneAndSubmitteeForAUser(user, tickets) {
  let assignedTickets = [];
  let submittedTickets = [];
  tickets.forEach((ticket) => {
    if (
      ticket[constantService.TICKET_ENTITY.columns.assignee_id] &&
      ticket[constantService.TICKET_ENTITY.columns.assignee_id] == user._id
    ) {
      assignedTickets.push(ticket);
    }

    if (
      ticket[constantService.TICKET_ENTITY.columns.submitter_id] &&
      ticket[constantService.TICKET_ENTITY.columns.submitter_id] == user._id
    ) {
      submittedTickets.push(ticket);
    }
  });

  if (assignedTickets.length > 0) {
    user[constantService.USER_ENTITY.assignee.name] = assignedTickets;
  }

  if (submittedTickets.length > 0) {
    user[constantService.USER_ENTITY.submitter.name] = submittedTickets;
  }

  return user;
}

/**
 *
 * @param usersData
 * @param tickets
 * @param type
 */
function transformUserForTicket(tickets, users) {
  if (!tickets && !Array.isArray(tickets)) {
    return null;
  }

  if (!users && !Array.isArray(users)) {
    return tickets;
  }

  return tickets.map((ticket) => {
    if (ticket) {
      ticket = transformAssigneAndSubmitteeForATicket(ticket, users);
    }

    return ticket;
  });
}

/**
 *
 * @param {*} ticket
 * @param {*} users
 */
function transformAssigneAndSubmitteeForATicket(ticket, users) {
  users.forEach((user) => {
    //return ticket once founnd matching all required mapped fields
    if (
      ticket[constantService.TICKET_USER_TYPE.assignee.name] &&
      ticket[constantService.TICKET_USER_TYPE.submitter.name]
    ) {
      return ticket;
    }

    //if key exists then do not re-add to avoid overriding the correct mapped value
    if (
      !ticket[constantService.TICKET_USER_TYPE.assignee.name] &&
      ticket[constantService.TICKET_USER_TYPE.assignee.column] &&
      ticket[constantService.TICKET_USER_TYPE.assignee.column] == user._id
    ) {
      ticket[constantService.TICKET_USER_TYPE.assignee.name] = user;
    }

    //if key exists then do not re-add to avoid overriding the correct mapped value
    if (
      !ticket[constantService.TICKET_USER_TYPE.submitter.name] &&
      ticket[constantService.TICKET_USER_TYPE.submitter.column] &&
      ticket[constantService.TICKET_USER_TYPE.submitter.column] == user._id
    ) {
      ticket[constantService.TICKET_USER_TYPE.submitter.name] = user;
    }
  });

  return ticket;
}

/**
 *
 * @param usersData
 * @param tickets
 * @param type
 */
function transformTicketsForOrganizations(organizations, tickets) {
  if (!organizations && !Array.isArray(organizations)) {
    return null;
  }

  if (!tickets && !Array.isArray(tickets)) {
    return organizations;
  }

  return organizations.map((organization) => {
    if (organization) {
      organization = transformTicketForAnOrganization(organization, tickets);
    }

    return organization;
  });
}

function transformTicketForAnOrganization(organization, tickets) {
  let createdTickets = [];
  tickets.forEach((ticket) => {
    if (
      ticket[constantService.TICKET_ENTITY.columns.organization_id] &&
      ticket[constantService.TICKET_ENTITY.columns.organization_id] == organization._id
    ) {
      createdTickets.push(ticket);
    }
  });

  if (createdTickets.length > 0) {
    organization[constantService.TICKET_ENTITY.tickets.name] = createdTickets;
  }

  return organization;
}

exports.transformTicketsForUser = transformTicketsForUser;
exports.transformUserForTicket = transformUserForTicket;
exports.transformTicketsForOrganizations = transformTicketsForOrganizations;
