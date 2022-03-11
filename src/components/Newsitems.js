import React, { Component } from 'react'

export class Newsitems extends Component {
    render() {
        let { title, description,imageurl,newsurl,author,publishedAt } = this.props
        return (
            <>


                   {/* card1 */}
                <div className="card" style={{ width: "18rem" }} >
                    <img className="card-img-top" src={!imageurl?"https://images.livemint.com/img/2022/02/26/600x338/stock-kItE--621x414@LiveMint_1645840245438.jpg":imageurl} alt="img" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsurl} target="_blank" rel='noreferrer' className="btn btn-dark">Read more</a>
                        <p class="card-text"><small class="text-muted">By {!author?"unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
                    </div>
                </div>
                {/* card1 end */}
            </>
        )
    }
}

export default Newsitems