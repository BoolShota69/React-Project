import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import HeaderH from './HeaderH.jsx';
import { dataHewan as initialDataHewan } from './dataH.js';
import CardListH from './CardListH.jsx';

class Hewan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHewan: initialDataHewan,
    };
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      dataHewan: prevState.dataHewan.filter((hewan) => hewan.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <HeaderH />
        <CardListH
          dataHewan={this.state.dataHewan}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

const root = createRoot(document
    .getElementById('root'));
root.render(<Hewan />);
