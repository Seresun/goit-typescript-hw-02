interface Image {
  urls: { small: string };
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        onClick={onClick}
        className="image"
      />
    </div>
  );
};

export default ImageCard;
