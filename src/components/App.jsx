import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'helpers/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { LoadMoreBtn } from './Button/Button';

export const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function ComponentUpdate() {
      try {
        setLoading(true);
        const { totalHits, hits } = await fetchImages(query, page);
        if (totalHits === 0) {
          toast.custom(`Oooops 🥹 Nothing was found for your request`);
          return;
        }
        if (page !== 1) {
          setImages(prevState => [...prevState, ...hits]);
        } else {
          setImages(hits);
        }
      } catch (error) {
        toast.error(`Oops! Something went wrong!`);
      } finally {
        setLoading(false);
      }
    }
    ComponentUpdate();
  }, [query, page]);

  const handleOnSubmit = e => {
    e.preventDefault();
    setQuery(e.target.elements.query.value.trim());
    setImages([]);
    setPage(1);
  };
  const incrementPage = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      <Searchbar onSubmitQuery={handleOnSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      <Toaster
        containerStyle={{
          position: 'relative',
          top: '40px',
          right: '20px',
        }}
        reverseOrder={false}
      />
      <Loader loading={loading} />
      {images.length % 12 === 0 && images.length > 0 && (
        <LoadMoreBtn action={incrementPage} />
      )}
    </div>
  );
};
