import "./Modal.css";

function Modal({ modalTitle, onModalCancel, onModalConfirm }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{modalTitle}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={onModalCancel}>
            Cancel
          </button>
          <button className="btn" onClick={onModalConfirm}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
