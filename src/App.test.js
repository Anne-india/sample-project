import React from 'react';
import ReactDOM from 'react-dom';
import Diamondsweeper from './Diamondsweeper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Diamondsweeper />, div);
  ReactDOM.unmountComponentAtNode(div);
});
