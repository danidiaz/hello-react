import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));

console.log('Hello world!');
const foo = {x : 5}
const bar = {...foo, y : 6}
console.log(foo);
console.log(bar);

