import React, { useState } from 'react';

const TableWithCheckboxes = () => {
  // Sample data
  const data = [
    { id: 1, name: 'Item 1', selected: false },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false },
    { id: 4, name: 'Item 4', selected: false },
    { id: 5, name: 'Item 5', selected: false },
  ];

  // State to manage selected checkboxes
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle checkbox toggle
  const handleCheckboxToggle = (itemId) => {
    setSelectedItems(prevSelected => {
      if (prevSelected.includes(itemId)) {
        return prevSelected.filter(id => id !== itemId);
      } else {
        return [...prevSelected, itemId];
      }
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Select</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxToggle(item.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableWithCheckboxes;
