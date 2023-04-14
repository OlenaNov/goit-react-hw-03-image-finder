import { Component } from "react";
import Layout from "./Layout";
import Searchbar from "./Searchbar";
import { fetchImages } from "./utilities/api";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import { errors } from './constants/errors';
import Error from "./Error";

export class App extends Component {

  state = {
    result: [],
    query: '',
    page: 1,
    error: '',
  };

  handleSubmit = async query => {
    this.setState({ isLoading: true, });

    try {

    const result =  await fetchImages(query);
    this.setState({ 
        result: [...result],
        query,
        page: 1,
       });

      } catch {
        this.setState({ error: errors.errFetch });

    } finally {
      
      this.setState({ isLoading: false, });
    };
  };

  handleLoadMore = async () => {
    this.setState({ isLoading: true, });
    const { query, page } = this.state;
    const nextPage = page + 1;
    try {
    const result =  await fetchImages(query, nextPage);

    this.setState(prevState => ({ 

        result: [...prevState.result, ...result],
        page: nextPage,
       }));

      } catch {
        this.setState({ error: errors.errFetch });

    } finally {

      this.setState({ isLoading: false, });
    };
  }

  render() {
    const { result, isLoading, error } = this.state;

    return (

      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />
        {result && <ImageGallery items={result} /> }
        {isLoading && <Loader />}
        {result.length && !isLoading 
        ? <Button fetchMore={this.handleLoadMore} /> 
        : null}
        {error && <Error errorText={error} />}
      </Layout>
    );
  };
};
