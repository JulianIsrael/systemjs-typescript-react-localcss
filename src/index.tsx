/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';

interface Props {
  name: string;
}

class Example extends React.Component<Props, void> {
  render() {
    return (
      <div>
        <h1>{ this.props.name }</h1>
      </div>
    );
  }
}

var name: string = "David Cameraman #hameron";


React.render(<Example name={name}/>, document.getElementById('body'));
