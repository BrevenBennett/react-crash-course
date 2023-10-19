import './Modal.css'

function Modal({ modalTitle }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{modalTitle}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel">Cancel</button>
          <button className="btn">Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
