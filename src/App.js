import React, {Component} from 'react';
import './App.css';

import { connect } from 'react-redux';
// import * as actions from "./components/actions/reviews";

import {ProfileTitle} from "./components/ProfileTitle";
import {ProfileServices} from "./components/ProfileServices";
import ReviewSwitcher from "./components/ReviewSwitcher";
import ReviewAddNew from "./components/ReviewAddNew";


class App extends Component {
  static defaultProps = {
    getMessages: () => (console.log("getMessages isn't set"))
  }

  componentDidMount = () => {
    this.props.getMessages()
  }

  render () {
    console.log(this.props)
    const {currentUserProfile, servicesTitle, services} = this.props;
    return (
      <div className="reviews-box">
        <ProfileTitle currentUserProfile={currentUserProfile}  />
        <ProfileServices servicesTitle={servicesTitle} 
          services={services} />
        <ReviewSwitcher />
        <ReviewAddNew />
      </div>
    );
  }  
}

const mapStateToProps = state => ({
  currentUserProfile: state.currentUserProfile.currentProfile,
  servicesTitle: state.currentUserProfile.services.servicesTitle,
  services: state.currentUserProfile.services.services
});

// const mapDispatchToProps = {... actions};

export default connect(mapStateToProps, null)(App);
