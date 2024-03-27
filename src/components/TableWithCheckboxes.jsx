import React, { Component } from 'react';

class TableWithCheckboxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'John Doe', age: 30, location: 'New York', selected: false },
        { id: 2, name: 'Jane Smith', age: 25, location: 'San Francisco', selected: false }
      ]
    };
  }

  handleCheckboxChange = (id) => {
    this.setState({
      data: this.state.data.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => this.handleCheckboxChange(item.id)}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TableWithCheckboxes;