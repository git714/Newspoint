import React, { Component } from 'react'
import { Newsitems } from './Newsitems';
import Spinner from './Spinner';
export default class News extends Component {
    
    constructor() {
        super();
        this.state = {
            // articles: this.articles,
            articles: [],
            loading: false,
            page: 1

        }
    }
    handlePrevclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7a06d353eb394a3d84c77aa332d31858&page=${this.state.page - 1}`
        this.setState({loading:true})
        const data = await fetch(url);
        const parsedData = await data.json();
        //  console.log(parsedData.articles)
        this.setState(
            {
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading:false
            });

    }
    handleNextclick = async () => {
        
           let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7a06d353eb394a3d84c77aa332d31858&page=${this.state.page + 1}&pagesize=20`
            const data = await fetch(url);
            this.setState({loading:true});
            const parsedData = await data.json();
            console.log(this.state.articles)
            // console.log(parsedData.totalResults)
           

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading:false
            });    
    }


    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=7a06d353eb394a3d84c77aa332d31858&page=${this.state.page}&pagesize=${this.props.pageSize}`
        this.setState({loading:true});
        const data = await fetch(url);
        const parsedData = await data.json();
      
        this.setState({
            articles: parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        });
    }
    render() {

        return (
            <>
                <div className='container my-3'>
               {this.state.loading && <Spinner/>}
                    <div className='row ' >
                        {this.state.articles.map((element) => {

                            return <div className='col-sm-4' key={element.url}>

                                <Newsitems title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} publishedAt={element.publishedAt} />

                            </div>

                        }

                        )}

                    </div>
                    <div className='container d-flex justify-content-between'>
                        {/* previous button */}
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
                        {/* Next button */}
                        <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)}  type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>


                    </div>
                </div>



            </>

        )
    }
}
