import React, {Component} from "react";
import { connect } from 'react-redux';
import * as actions from "./actions/reviews";

class ReviewAddNew extends Component {
    static defaultProps = {
        addReview: () => (console.log("addReview isn't set")),
        userName: "Юзер Юзер", // mock
        isFetching: false,
        isFetchingComment: false,
        errorAddComment: false
    }

    state = {
        text: ""
    }

    handleInput = (e) => {
        if (e.ctrlKey && e.key === 'Enter' ){
            this.saveReview()
        } else {
            let safeValue = e.target.value.split("<").join("&lt")
            this.setState({text: safeValue})
        }        
    }

    saveReview = () => {
        const {addReview, userName} = this.props;
        if(!this.state.text.trim()) return;
        addReview({
            name: userName,
            time: new Date().getTime(),
            text: this.state.text.trim()
        })        
    }

    componentDidUpdate(prevProps){
        if(prevProps.status === 'PENDING' && this.props.status === 'RESOLVED' && this.state.text){
            this.setState({text: ''})
        }
    }

    render() {
        const {isFetching, isFetchingComment, errorAddComment} = this.props;        
        return(
            <div className="reviews__add" >
                {errorAddComment && 
                    <span className="reviews__error"> 
                        Что-то пошло не так. Попробуйте еще раз
                    </span> }
                <textarea 
                    onChange={this.handleInput} 
                    className="reviews__input" 
                    rows="4" 
                    value = {this.state.text} 
                    onKeyDown={this.handleInput}
                    maxlength="500"
                    />
                <button onClick={this.saveReview} 
                    disabled={isFetchingComment || isFetching ? true : false} 
                    className="reviews__button"  >
                        Написать консультанту
                </button>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    isFetchingComment: state.reviews.isFetchingComment,
    isFetching: state.reviews.isFetching,
    errorAddComment: state.reviews.errorAddComment,
    status: state.reviews.status
});

const mapDispatchToProps = {...actions};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewAddNew);