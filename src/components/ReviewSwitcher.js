import React, {Component} from "react";
import { connect } from 'react-redux';
import varyDateView from "../utils/varyDateView";

class ReviewSwitcher extends Component {
    state = {
        latestReviews: true
    }

    switchView = () => {
        this.setState(prevState => ({latestReviews: !prevState.latestReviews}))
    }

    render () {
        const {reviews, likes} = this.props;
        const {latestReviews} = this.state
        const message = (msg) => (<div className="reviews__item" key={msg.time + Math.random()*10} >
                                    <p className="reviews__name" >
                                        {msg.name}
                                        <span className="reviews__date" >
                                            {varyDateView(msg.time)}
                                        </span> 
                                    </p>
                                    <div className="reviews__text-box">
                                        <p className="reviews__text" >
                                            {msg.text}
                                        </p>
                                    </div>
                                </div>);
        const reviewsList = latestReviews ? reviews.slice(reviews.length - 3).map( msg => (
                            message(msg))) : reviews.map( msg => (message(msg)));
        return(
            <div className="reviews" >
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
                        {likes && 
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
                    {reviews ? reviewsList : "Отзывов пока нет"}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    reviews: state.reviews.comments,
    likes: state.reviews.likes    
});

export default connect(mapStateToProps, null)(ReviewSwitcher);