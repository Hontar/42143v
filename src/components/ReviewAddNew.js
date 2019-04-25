import React, {Component} from "react";
import { connect } from 'react-redux';
// import * as actions from "./actions";

class ReviewAddNew extends Component {
    static defaultProps = {
        addReview: () => (console.log("addReview isn't set"))
    }
    state = {
        text: ""
    }

    handleInput = (e) => {
        this.setState({text: e.target.value})
    }

    saveReview = () => {
        const {addReview, userName} = this.props;
        addReview({
            name: userName,
            time: new Date().getTime(),
            text: this.state.text
        })
    }

    render() {
        const {isFetching} = this.props
        return(
            <div className="reviews__add" >
                <textarea onChange={this.handleInput} className="reviews__input" rows="4" />
                <button onClick={this.saveReview} 
                    disabled={isFetching ? true : false} className="reviews__button"  >
                    Написать консультанту
                </button>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    isFetching: state.reviews.isFetching,
    userName: state.auth.userName
});

// const mapDispatchToProps = {... actions};

export default connect(mapStateToProps, null)(ReviewAddNew);