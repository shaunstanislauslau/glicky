```js
const styled = require('styled-components').default;

const Icon = require('../Icon/Icon').default;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin: 12px 0;
  }
`;

<Container>
  <Button type="primary">Primary</Button>

  <Button type="secondary">Secondary</Button>

  <Button type="error">Error</Button>

  <Button type="disabled">Disabled</Button>

  <Button type="primary" icon={<Icon type="add" />}>Icon</Button>
</Container>

```