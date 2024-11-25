import Modal from 'react-modal';

interface Image {
  urls: { regular: string };
  alt_description: string;
}

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className="modal"
    >
      <button onClick={onRequestClose} className="close-btn">
        Close
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description || 'Image'}
        className="modal-image"
      />
    </Modal>
  );
};

export default ImageModal;
