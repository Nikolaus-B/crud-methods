import Modal from 'react-modal';

export const ModalWindow = ({
  isModalOpen,
  setIsModalOpen,
  newDescription,
  handleSubmitEdit,
  setNewDescription,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      contentLabel="Edit Description Modal"
    >
      <h2>Edit Description</h2>
      <div className="mb-3">
        <label htmlFor="editDescription" className="form-label">
          Description:
        </label>
        <input
          type="text"
          className="form-control"
          id="editDescription"
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmitEdit}>
        Save Description
      </button>
      <button
        className="btn btn-secondary ml-2"
        onClick={() => setIsModalOpen(false)}
      >
        Close
      </button>
    </Modal>
  );
};
