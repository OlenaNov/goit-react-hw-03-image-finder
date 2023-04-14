import PropTypes from 'prop-types';
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

ImageGallery.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
    }).isRequired,
    ).isRequired,
};
