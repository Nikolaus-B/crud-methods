import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import { ItemForm } from './ItemForm/ItemForm';
import { ModalWindow } from './ModalWindow/ModalWindow';
import { List } from './List/List';

Modal.setAppElement('#root');

export const App = () => {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      const initialItems = [
        {
          id: generateId(),
          name: 'Item 1',
          description: 'Description for item 1',
        },
        {
          id: generateId(),
          name: 'Item 2',
          description: 'Description for item 2',
        },
        {
          id: generateId(),
          name: 'Item 3',
          description: 'Description for item 3',
        },
      ];
      setItems(initialItems);
      localStorage.setItem('items', JSON.stringify(initialItems));
    }
  }, []);

  const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  const addItem = newItem => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const updateItem = updatedItem => {
    const updatedItems = items.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setIsModalOpen(false);
  };

  const deleteItem = id => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const handleEditDescription = item => {
    setEditItem(item);
    setIsModalOpen(true);
    setNewDescription(item.description);
  };

  const handleSubmitEdit = () => {
    if (!newDescription.trim()) return;
    const updatedItem = { ...editItem, description: newDescription.trim() };
    updateItem(updatedItem);
  };

  const handleSubmit = (name, description) => {
    if (!name.trim() || !description.trim()) return;
    const newItem = {
      id: generateId(),
      name: name.trim(),
      description: description.trim(),
    };
    addItem(newItem);
  };

  return (
    <div className="container mt-5">
      <h1>Items</h1>
      <ItemForm onAdd={handleSubmit} />
      <List
        items={items}
        handleEditDescription={handleEditDescription}
        deleteItem={deleteItem}
      />
      <ModalWindow
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        newDescription={newDescription}
        handleSubmitEdit={handleSubmitEdit}
        setNewDescription={setNewDescription}
      />
    </div>
  );
};
