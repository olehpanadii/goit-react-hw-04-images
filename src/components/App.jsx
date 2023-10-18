import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from 'helpers/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { LoadMoreBtn } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    loading: false,
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.setState({
      query: e.target.elements.query.value.trim(),
      images: [],
      page: 1,
    });
  };
  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const { totalHits, hits } = await fetchImages(
          this.state.query,
          this.state.page
        );
        if (totalHits === 0) {
          toast.custom(`Oooops 🥹 Nothing was found for your request`);
          return;
        }
        if (this.state.images.length > 0) {
          this.setState({
            images: [...this.state.images, ...hits],
          });
        } else {
          this.setState({ images: hits });
        }
      } catch (error) {
        toast.error(`Oops! Something went wrong!`);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    const { images, loading } = this.state;
    return (
      <div>
        <Searchbar onSubmitQuery={this.handleOnSubmit} />
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
          <LoadMoreBtn action={this.incrementPage} />
        )}
      </div>
    );
  }
}
