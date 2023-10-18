import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90vh',

    margin: 'auto',
  },
};

Modal.setAppElement('#root');

export const ModalWindow = ({ url, isOpenModal, onCloseModal }) => {
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={url} alt="" />
    </Modal>
  );
};
