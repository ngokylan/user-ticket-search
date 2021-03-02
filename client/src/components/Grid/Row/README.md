
No Gutters
```js
import Col from '../Col';
import Container from '../Container';

<Container>
  <Row isNoGutters isStyleguidist>
    <Col className="demo-col">A</Col>
    <Col className="demo-col">B</Col>
    <Col className="demo-col">C</Col>
  </Row>
</Container>
```

Inline
```js
import Col from '../Col';
import Container from '../Container';

<Container>
  <Row isStyleguidist isInline>
    <Col className="demo-col">A</Col>
    <Col className="demo-col">B</Col>
    <Col className="demo-col">C</Col>
  </Row>
</Container>
```

Direction
```js
import Col from '../Col';
import Container from '../Container';

<Container>
  <Row isStyleguidist direction="row">
    <Col className="demo-col">A</Col>
    <Col className="demo-col">B</Col>
    <Col className="demo-col">C</Col>
  </Row>
<br/>
  <Row isStyleguidist direction="column">
    <Col className="demo-col" basis="">A</Col>
    <Col className="demo-col">B</Col>
    <Col className="demo-col">C</Col>
  </Row>
<br/>
  <Row isStyleguidist direction="row-reverse">
    <Col className="demo-col">A</Col>
    <Col className="demo-col">B</Col>
    <Col className="demo-col">C</Col>
  </Row>
<br/>
  <Row isStyleguidist isInline direction="column-reverse">
    <Col className="demo-col">A</Col>
    <Col className="demo-col">B</Col>
    <Col className="demo-col">C</Col>
  </Row>
</Container>
```

Wrap
```js
import Col from '../Col';
import Container from '../Container';

<Container>
  <Row isStyleguidist wrap="wrap">
    <Col className="demo-col" span={12}>A</Col>
    <Col className="demo-col" span={12}>B</Col>
    <Col className="demo-col" span={12}>C</Col>
  </Row>
<br/>
<div style={{maxWidth:'100%',overflow:'auto'}}>
  <Row isStyleguidist wrap="nowrap">
    <Col className="demo-col" span={12}>A</Col>
    <Col className="demo-col" span={12}>B</Col>
    <Col className="demo-col" span={12}>C</Col>
  </Row>
</div>
<br/>
  <Row isStyleguidist wrap="wrap-reverse">
    <Col className="demo-col" span={12}>A</Col>
    <Col className="demo-col" span={12}>B</Col>
    <Col className="demo-col" span={12}>C</Col>
  </Row>
</Container>
```

Justify Content
```js
import Col from '../Col';
import Container from '../Container';

<Container>
  <Row isStyleguidist justifyContent="start">
    <Col className="demo-col" span={2}>A</Col>
    <Col className="demo-col" span={2}>B</Col>
    <Col className="demo-col" span={2}>C</Col>
  </Row>
<br/>
  <Row isStyleguidist justifyContent="end">
    <Col className="demo-col" span={2}>A</Col>
    <Col className="demo-col" span={2}>B</Col>
    <Col className="demo-col" span={2}>C</Col>
  </Row>
<br/>
  <Row isStyleguidist justifyContent="center">
    <Col className="demo-col" span={2}>A</Col>
    <Col className="demo-col" span={2}>B</Col>
    <Col className="demo-col" span={2}>C</Col>
  </Row>
<br/>
  <Row isStyleguidist justifyContent="between">
    <Col className="demo-col" span={2}>A</Col>
    <Col className="demo-col" span={2}>B</Col>
    <Col className="demo-col" span={2}>C</Col>
  </Row>
<br/>
  <Row isStyleguidist justifyContent="around">
    <Col className="demo-col" span={2}>A</Col>
    <Col className="demo-col" span={2}>B</Col>
    <Col className="demo-col" span={2}>C</Col>
  </Row>
<br/>
</Container>
```

Align Items
```js
import Col from '../Col';
import Container from '../Container';

<Container>
  <Row isStyleguidist alignItems="start">
    <Col className="demo-col" span={2}>A</Col>
    <Col className="demo-col" span={2}><br />B<br /><br /></Col>
    <Col className="demo-col" span={2}>C</Col>
  </Row>
<br />
  <Row isStyleguidist alignItems="end">
    <Col className="demo-col" span={2}>A</Col>
    <Col className="demo-col" span={2}><br />B<br /><br /></Col>
    <Col className="demo-col" span={2}>C</Col>
  </Row>
<br />
  <Row isStyleguidist alignItems="center">
    <Col className="demo-col" span={2}>A</Col>
    <Col className="demo-col" span={2}><br />B<br /><br /></Col>
    <Col className="demo-col" span={2}>C</Col>
  </Row>
<br />
  <Row isStyleguidist alignItems="baseline">
    <Col className="demo-col" span={2}>A</Col>
    <Col className="demo-col" span={2}><br />B<br /><br /></Col>
    <Col className="demo-col" span={2}>C</Col>
  </Row>
<br />
  <Row isStyleguidist alignItems="stretch">
    <Col className="demo-col" span={2}>A</Col>
    <Col className="demo-col" span={2}><br />B<br /><br /></Col>
    <Col className="demo-col" span={2}>C</Col>
  </Row>
</Container>
```

Align Content
```js
import Col from '../Col';
import Container from '../Container';

<Container>
  <Row alignItems="stretch">
    <Col>
      <Row alignContent="start">
        <Col className="demo-col" span={12}>A</Col>
        <Col className="demo-col" span={12}><br />B<br /><br /></Col>
        <Col className="demo-col" span={12}>C</Col>
      </Row>
    </Col>
    <Col>
      <Row alignContent="end">
        <Col className="demo-col" span={12}>A</Col>
        <Col className="demo-col" span={12}><br />B<br /><br /></Col>
        <Col className="demo-col" span={12}>C</Col>
      </Row>
    </Col>
    <Col>
      <Row alignContent="center">
        <Col className="demo-col" span={12}>A</Col>
        <Col className="demo-col" span={12}><br />B<br /><br /></Col>
        <Col className="demo-col" span={12}>C</Col>
      </Row>
    </Col>
    <Col>
      <Row alignContent="between">
        <Col className="demo-col" span={12}>A</Col>
        <Col className="demo-col" span={12}><br />B<br /><br /></Col>
        <Col className="demo-col" span={12}>C</Col>
      </Row>
    </Col>
    <Col>
      <Row alignContent="around">
        <Col className="demo-col" span={12}>A</Col>
        <Col className="demo-col" span={12}><br />B<br /><br /></Col>
        <Col className="demo-col" span={12}>C</Col>
      </Row>
    </Col>
    <Col>
      <Row alignContent="stretch">
        <Col className="demo-col" span={12}>A</Col>
        <Col className="demo-col" span={12}><br />B<br /><br /></Col>
        <Col className="demo-col" span={12}>C</Col>
      </Row>
    </Col>
    <Col><div style={{height:'200px'}}></div></Col>
  </Row>
</Container>
```

The props above also can be used in specific breakpoint.
```js
import Col from '../Col';
import Container from '../Container';

<Container>
  <Row isInline sm={{display:'block',direction:'row-reverse'}} lg={{direction:'row'}}>
    <Col className="demo-col">A</Col>
    <Col className="demo-col">B</Col>
    <Col className="demo-col">C</Col>
  </Row>
</Container>
```

* <i>The custom class demo-col is defined and used for the Styleguidist only.</i>