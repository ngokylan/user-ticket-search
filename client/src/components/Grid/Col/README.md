
Basic
```js
import Container from '../Container';
import Row from '../Row';

<Container>
  <Row>
    <Col className="demo-col">A</Col>
    <Col className="demo-col">B</Col>
    <Col className="demo-col">C</Col>
  </Row>
</Container>
```

Span
```js
import Container from '../Container';
import Row from '../Row';

<Container>
  <Row>
    <Col className="demo-col" span={6}>A</Col>
    <Col className="demo-col" span={12}>B</Col>
    <Col className="demo-col" span={6}>C</Col>
  </Row>
  <br />
  <Row>
    <Col className="demo-col" span={4}>A</Col>
    <Col className="demo-col" span={10}>B</Col>
    <Col className="demo-col" span={10}>C</Col>
  </Row>
  <br />
  <Row>
    <Col className="demo-col" xs={4} md={6}>A</Col>
    <Col className="demo-col" xs={10} md={6}>B</Col>
    <Col className="demo-col" xs={10} md={12}>C</Col>
  </Row>
</Container>
```

Offset
```js
import Container from '../Container';
import Row from '../Row';

<Container>
  <Row>
    <Col className="demo-col" offset={3} span={3}>A</Col>
    <Col className="demo-col" span={12}>B</Col>
    <Col className="demo-col" span={6}>C</Col>
  </Row>
  <br />
  <Row>
    <Col className="demo-col" span={6}>A</Col>
    <Col className="demo-col" span={6}>B</Col>
    <Col className="demo-col" offset={6} span={6}>C</Col>
  </Row>
</Container>
```

Grow, isAuto, Order, Shrink
```js
import Container from '../Container';
import Row from '../Row';

<Container>
  <Row>
    <Col className="demo-col">A</Col>
    <Col className="demo-col" grow={0}>B</Col>
    <Col className="demo-col">C</Col>
  </Row>
  <br />
  <Row>
    <Col className="demo-col" span={6}>A</Col>
    <Col className="demo-col" isAuto>B</Col>
    <Col className="demo-col" span={6}>C</Col>
  </Row>
  <br />
  <Row>
    <Col className="demo-col" order={3}>A</Col>
    <Col className="demo-col" order={2}>B</Col>
    <Col className="demo-col" order={1}>C</Col>
  </Row>
  <br />
  <Row>
    <Col className="demo-col">A</Col>
    <Col className="demo-col" shrink={0}>B</Col>
    <Col className="demo-col" shrink={1}>C</Col>
  </Row>
</Container>
```

Align Self
```js
import Container from '../Container';
import Row from '../Row';

<Container>
  <Row>
    <Col className="demo-col" align="auto">
      A
    </Col>
    <Col className="demo-col" align="start">
      B
    </Col>
    <Col className="demo-col" align="end">
      C
    </Col>
    <Col className="demo-col" align="center">
      A
    </Col>
    <Col className="demo-col" align="baseline">
      B
    </Col>
    <Col className="demo-col" align="stretch">
      C
    </Col>
    <Col className="demo-col"><div style={{height:'200px'}}></div></Col>
  </Row>
</Container>
```

Mixed on specific breakpoints
```js
import Container from '../Container';
import Row from '../Row';

<Container>
  <Row>
    <Col className="demo-col" sm={{span:6}} md={{span:8,order:3}}>A</Col>
    <Col className="demo-col" sm={{span:12}} md={{span:8,order:1}}>B</Col>
    <Col className="demo-col" sm={{span:6}} md={{span:8,order:2}}>C</Col>
  </Row>
</Container>
```

* <i>The custom class demo-col is defined and used for the Styleguidist only.</i>