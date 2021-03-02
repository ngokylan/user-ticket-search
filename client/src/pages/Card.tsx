import React, { Component } from 'react';
import { Text, Paragraph } from '../components/Typography';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { Row, Col } from '../components/Grid';

class CardDemo extends Component {
  render() {   
    return (
      <>        
        <Row>
          <Col xs={12} md={8} className="mb-3">
            <Card
              isFullHeight={true}
              prefix="Policies and Procedures"
              heading="Figma Tutorial: Device Frames and Scrolling"                            
              className=""
              onClick={() => {
                console.log('click card!');
              }}
            >
              <Badge type="warning" className="mb-3">
                Not Started
              </Badge>
              <Row isNoGutters={true}>
                <Col isAuto={true}>
                  <Text size="sm" color="gray">
                    Completion
                  </Text>
                  <Row isNoGutters={true} wrap="wrap" alignItems="center">
                    <Col isAuto={true} grow={0}>
                      <Paragraph>Jul 30,2019</Paragraph>
                    </Col>
                    <Col isAuto={true} className="ml-2" />
                  </Row>
                </Col>
                <Col
                  isAuto={true}
                  className="d-flex justify-content-end pr-0 -mr-3"
                >                
                </Col>
              </Row>
            </Card>
          </Col>        
        </Row>
      </>
    );
  }
}

export default CardDemo;
