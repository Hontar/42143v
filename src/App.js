import React, {Component} from 'react';
import './App.css';

import avatar from "./assets/avatar.png"; // import because no requests for currentProfile

import { connect } from 'react-redux';
import * as actions from "./components/actions/reviews";

import {ProfileTitle} from "./components/ProfileTitle";
import {ProfileServices} from "./components/ProfileServices";
import ReviewSwitcher from "./components/ReviewSwitcher";
import ReviewAddNew from "./components/ReviewAddNew";


class App extends Component {
  static defaultProps = {
    getReviews: () => (console.log("getReviews isn't set")),
    currentUserProfile: {
      currentProfile: {
        userAvatar:{
          src: avatar,
          alt: "Вероника Ростова"
        }, 
        userName: "Вероника Ростова", 
        userPosition: "Менеджер по продажам", 
        userSummary: "Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны"
      },
      services: {
        servicesTitle: "Услуг",
        servicesList: [
          {
            title: "Ручное бронирование",
            count: 11,
          },
          {
            title: "Пакетные туры",
            count: 3,
          },
          {
            title: "Отели",
            count: 1,
          }
        ]
      }
    }
  }

  componentDidMount = () => {
    this.props.getReviews()
  }

  render () {
    const {currentProfile, servicesTitle, services} = this.props.currentUserProfile;
    return (
      <div className="reviews-box">
        <ProfileTitle currentUserProfile={currentProfile}  />
        <ProfileServices servicesTitle={servicesTitle} 
          services={services.servicesList} />
        <ReviewSwitcher />
        <ReviewAddNew />
      </div>
    );
  }  
}

// const mapStateToProps = state => ({
//   currentUserProfile: state.currentUserProfile
// });

const mapDispatchToProps = {...actions};

export default connect(null, mapDispatchToProps)(App);