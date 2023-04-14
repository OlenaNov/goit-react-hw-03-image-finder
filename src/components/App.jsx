import { Component } from "react";
import Layout from "./Layout";
import Searchbar from "./Searchbar";
import { fetchImages } from "./utilities/api";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";

export class App extends Component {

  state = {
    result: [],
    query: '',
    page: 1,
  };

  handleSubmit = async query => {
    this.setState({ isLoading: true, });
    const result =  await fetchImages(query);

    this.setState({ 
        result: [...result],
        query,
        page: 1,
        isLoading: false,
       });
  };

  handleLoadMore = async () => {
    this.setState({ isLoading: true, });
    const { query, page } = this.state;
    const nextPage = page + 1;
    const result =  await fetchImages(query, nextPage);

    this.setState(prevState => ({ 
        result: [...prevState.result, ...result],
        page: nextPage,
        isLoading: false,
       }));
  }

  render() {
    const { result, isLoading } = this.state;

    return (

      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />
        {result && <ImageGallery items={result} /> }
        {isLoading && <Loader />}
        {result.length 
        ? <Button fetchMore={this.handleLoadMore} /> 
        : null}
      </Layout>
    );
  };
};
