import React from 'react';

export const List = ({ items, handleEditDescription, deleteItem }) => {
  return (
    <ul className="list-group mt-3">
      {items.map(item => (
        <li key={item.id} className="list-group-item">
          <div>
            <strong>Name:</strong> {item.name}
          </div>
          <div>
            <strong>Description:</strong> {item.description}
          </div>
          <button
            className="btn btn-success mt-2"
            onClick={() => handleEditDescription(item)}
          >
            Edit Description
          </button>
          <button
            className="btn btn-danger mt-2 ml-2"
            onClick={() => deleteItem(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
