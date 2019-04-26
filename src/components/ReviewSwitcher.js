import React, {Component} from "react";
import { connect } from 'react-redux';
import varyDateView from "../utils/varyDateView";
import {comments} from "../utils/commentsMock";

class ReviewSwitcher extends Component {
    static defaultProps = {
        reviews: [...comments],
        likes: 131,
        isFetching: false
    }

    state = {
        latestReviews: true
    }

    switchView = () => {
        this.setState(prevState => ({latestReviews: !prevState.latestReviews}))
    }

    renderComment = (msg) => (<div className="reviews__item" key={msg.time + Math.random()*10} >
                                <p className="reviews__name" >
                                    {msg.name}
                                    <span className="reviews__date" >
                                        {varyDateView(msg.time)}
                                    </span> 
                                </p>
                                <div className="reviews__text-box">
                                    <p className="reviews__text" >
                                        {msg.text.split("&lt").join("<")}
                                    </p>
                                </div>
                            </div>)
    renderCommentsList = () => {
        const {reviews} = this.props;
        const {latestReviews} = this.state;
        return (
            latestReviews 
                ? reviews.slice(reviews.length - 3).map( msg => (this.renderComment(msg))) 
                : reviews.map( msg => (this.renderComment(msg)))
        )
    }

    render () {
        const {reviews, likes, isFetching} = this.props;
        const {latestReviews} = this.state;
       
        return ( 
            <div className="reviews" >
                {isFetching 
                    ? 
                    <p className="reviews__status-message" >
                        Loading...
                    </p> 
                    : <>
                        <div className="reviews__total" >
                            <div className="reviews__toggle-view" >
                                <button onClick={this.switchView} 
                                    disabled={latestReviews}
                                    className={latestReviews ? "reviews__active" : "reviews__not-active"} >
                                        Последние отзывы
                                </button>
                                <button onClick={this.switchView} 
                                    disabled={!latestReviews}
                                    className={latestReviews ? "reviews__not-active" : "reviews__active"} >
                                        Все отзывы
                                </button>
                            </div>
                            <div className="reviews__indicators-view" >
                                {likes > 0 && 
                                    <span className="reviews__indicators_likes" >
                                        {likes}
                                    </span>}
                                {reviews && 
                                    <span className="reviews__indicators_comments" >
                                        {reviews.length}
                                    </span>}
                            </div>
                        </div>
                        <div className="reviews__list">
                            {reviews 
                                ? this.renderCommentsList()
                                : "Отзывов пока нет"}
                        </div>
                    </>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetching: state.reviews.isFetching,
    reviews: state.reviews.comments
});

export default connect(mapStateToProps, null)(ReviewSwitcher);