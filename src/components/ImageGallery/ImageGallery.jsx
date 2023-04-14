import ImageGalleryItem from '../ImageGalleryItem';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ items }) => {
    return (
        <List>
            {items.map(item => {
                return (
                    <ImageGalleryItem 
                        key={item.id}
                        item={item} />
                );
            })}
        </List>
    );
};

export default ImageGallery;