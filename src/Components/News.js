import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    //console.log("dsad");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults:0
    };
  }
  async componentDidMount() {
    this.updatenews();
  }
  updatenews = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f1ee2a091e7422f8b8beaa01b50978c&page=${this.state.page}&pageSize=6`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(80);
    await this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    })
    this.props.setProgress(100);
  };
  fetchMoreData = async() => {
    await this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f1ee2a091e7422f8b8beaa01b50978c&page=${this.state.page+1}&pageSize=6`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    await this.setState({
      loading: false,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  };

  render() {
    return (
      <div className="container my-3">
        <h1 class="display-1 text-center strong">DAILY PROPHET</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
