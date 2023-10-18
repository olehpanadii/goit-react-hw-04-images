import { ImageGaleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List, ListItem } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <div>
      <List>
        {images.map(image => (
          <ListItem key={image.id}>
            <ImageGaleryItem image={image} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
