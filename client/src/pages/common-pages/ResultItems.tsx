import React, { Component } from 'react';
import { Text, Paragraph, Heading } from '../../components/Typography';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import { Row, Col } from '../../components/Grid';
import { ResultItemType, TicketType } from './types';
import { ASSIGNEE_TICKET_TYPE, SUBMITTER_TICKET_TYPE } from '../../const';
import { generateUUID } from '../../_lib/helper';


type ResultPropsType = {
  items: any;
};

type ResultItemStateType = {
  items: any;
};

class ResultItems extends Component<ResultPropsType, ResultItemStateType> {
  constructor(props: ResultPropsType) {
    super(props);

    this.state = {
      ...props.items
    };
  }

  renderTickets = (tickets: any, type: string) => {
    if (!tickets || !Array.isArray(tickets)) {
      return '';
    }

    return tickets.map((ticket: TicketType) => {
      const status =
        ticket.priority && ticket.priority === 'urgent' ? 'danger' : 'warning';

      let otherAttibutesComponent: any = [];
      Object.entries({ ...ticket }).forEach(([key, value]) => {
        otherAttibutesComponent.push(
          <Row wrap="wrap" alignItems="center" className="mt-1 mb-1">
            <Col xs={24} xxxl={24}>
              <Text size="sm" color="gray">
                {`${key}: ${value}`}
              </Text>
            </Col>
          </Row>
        );
        return true;
      });

      const headerText =
        type === ASSIGNEE_TICKET_TYPE
          ? 'Assigned Tickets'
          : 'Submitted Tickets';
      return (
        <Row key={generateUUID()}>          
          <Col xs={12} md={24} className="mb-3">
            <Heading className="mt-4 mb-3">{headerText}</Heading>
            <Card
              isFullHeight={true}
              prefix={ticket._id}
              heading={ticket.subject}
              className=""
              onClick={() => {
                console.log('click card!');
              }}
            >
              <Badge type={status} className="mb-3">
                {ticket.priority}
              </Badge>
              {otherAttibutesComponent.map((item: any) => item)}
            </Card>
          </Col>
        </Row>
      );
    });
  };

  renderItems = (items: ResultItemType[]) => {
    if (!items || !Array.isArray(items)) {
      return '';
    }

    return items.map((item: ResultItemType) => {
      const status =
        item.active && item.active === 'true' ? 'success' : 'danger';
      const {
        _id,
        name,
        active,
        assigned_tickets,
        submitted_tickets,
        ...otherAttibutes
      } = item;
      let otherAttibutesComponent: any = [];
      Object.entries(otherAttibutes).forEach(([key, value]) => {
        otherAttibutesComponent.push(
          <Row wrap="wrap" alignItems="center" className="mt-1 mb-1">
            <Col xs={24} xxxl={24}>
              <Text size="sm" color="gray">
                {`${key}: ${value}`}
              </Text>
            </Col>
          </Row>
        );
        return true;
      });

      const assignedTicketComponent = this.renderTickets(
        assigned_tickets,
        ASSIGNEE_TICKET_TYPE
      );
      const submittedTicketComponent = this.renderTickets(
        submitted_tickets,
        SUBMITTER_TICKET_TYPE
      );
      return (
        <Col xs={12} md={8} className="mb-3" key={generateUUID()}>
          <Card
            isFullHeight={true}
            prefix={item._id}
            heading={item.name}
            className=""
            onClick={() => {
              console.log('click card!');
            }}
          >
            <Badge type={status} className="mb-3">
              {item.active}
            </Badge>
            {otherAttibutesComponent.map((item: any) => item)}
            {assignedTicketComponent ? (<>{assignedTicketComponent} + <hr></hr> </>) : ''}
            {submittedTicketComponent ? (<>{submittedTicketComponent} + <hr></hr> </>) : ''}
          </Card>
        </Col>
      );
    });
  };

  render() {
    const items =
      this.props && this.props.items.items && this.props.items.items;
    return (
      <>
        <Row>{this.renderItems(items)}</Row>
      </>
    );
  }
}

export default ResultItems;
