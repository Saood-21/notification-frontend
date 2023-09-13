import React from 'react'
import NavBar from '../components/NavBar'
import AppContainer from '../containers/AppContainer'
import EventContainer from '../containers/EventContainer'
import NotificationTypeContainer from '../containers/NotificationTypeContainer'

const LandingPage = () => {
  return (
    <>
    <NavBar></NavBar>
    <AppContainer></AppContainer>
    <div style={{height:"30px"}}></div>
    <EventContainer></EventContainer>
    <div style={{height:"30px"}}></div>
    <NotificationTypeContainer></NotificationTypeContainer>
    </>
  )
}

export default LandingPage