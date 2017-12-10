import React from 'react';
import { Button } from 'semantic-ui-react';

export default () => {
  return (
    <div>
      <h3>Yobro</h3>
      <p>hola</p>
      <Button onClick={() => console.log('hola')}>Hola</Button>
    </div>
  )
}
