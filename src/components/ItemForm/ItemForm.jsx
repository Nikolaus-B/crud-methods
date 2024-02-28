import { useState } from 'react';

export const ItemForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(name, description);
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="itemName" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="itemName"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="itemDescription" className="form-label">
          Description:
        </label>
        <input
          type="text"
          className="form-control"
          id="itemDescription"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Item
      </button>
    </form>
  );
};
