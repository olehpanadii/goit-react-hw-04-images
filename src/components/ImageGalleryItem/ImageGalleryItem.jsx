import { ModalWindow } from 'components/Modal/Modal';
import { useState } from 'react';
import { ImageGalleryObj } from './ImageGalleryItem.styled';

export const ImageGaleryItem = ({ image: { largeImageURL, webformatURL } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ImageGalleryObj src={webformatURL} alt="" onClick={openModal} />
      <ModalWindow
        url={largeImageURL}
        isOpenModal={isModalOpen}
        onCloseModal={closeModal}
      />
    </>
  );
};
