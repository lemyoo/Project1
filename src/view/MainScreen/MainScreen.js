import React from 'react'
import ContactList from '../../components/ContactList/ContactList'
import ChattingArea from '../../components/ChattingArea/ChattingArea'
import UserDetails from '../../components/UserDetails/UserDetails'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import './styles.css';

function MainScreen() {
    return (
        <div className="container-fluid counter-style">
            <div className="row">
                <div className="col-12 mb-2">
                    <UserDetails />
                </div>
            </div>
            <div className="row">
                <div className="col-3 ">
                    <div className="contact-list">
                        <ContactList />
                    </div>
                </div>
                <div className="col-6 ">
                    <div className="chatt-window">
                        <ChattingArea />
                    </div>
                </div>
                <div className="col-3 pl-1">
                    <ContactInfo />
                </div>
            </div>
        </div>
    )
}

export default MainScreen;