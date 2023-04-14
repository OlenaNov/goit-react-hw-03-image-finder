import Modal from "components/Modal";

import { Item, Image } from "./ImageGalleryItem.styled";
import { Component } from "react";

class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
          showModal: !showModal,
        }))
      };

    render() {
        const { showModal } = this.state;
        const { item } = this.props;

        return (
            <>
            <Item 
                onClick={this.toggleModal}
            >
                <Image src={item.webformatURL} alt={item.tags} />
            </Item>
            {showModal && (
                <Modal onClose={this.toggleModal}>
                    <img src={item.largeImageURL} alt={item.tags} />
                </Modal>)}
            </>
        );
    };
};

export default ImageGalleryItem;