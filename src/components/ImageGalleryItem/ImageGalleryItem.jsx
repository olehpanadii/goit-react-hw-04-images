import { ModalWindow } from 'components/Modal/Modal';
import { Component } from 'react';
import { ImageGalleryObj } from './ImageGalleryItem.styled';

export class ImageGaleryItem extends Component {
  state = { isModalOpen: false };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const {
      image: { largeImageURL, webformatURL },
    } = this.props;
    return (
      <>
        <ImageGalleryObj src={webformatURL} alt="" onClick={this.openModal} />
        <ModalWindow
          url={largeImageURL}
          isOpenModal={this.state.isModalOpen}
          onCloseModal={this.closeModal}
        />
      </>
    );
  }
}
