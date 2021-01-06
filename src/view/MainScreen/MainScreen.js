import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import ChattingArea from '../../components/ChattingArea/ChattingArea'
import './styles.css';

function MainScreen() {
    return (
        <div className="main-entry container-fluid">
            <div className="scrollable sidebar">
                <Navigation />
            </div>
            <div className="scrollable content">
                <ChattingArea />
            </div>
        </div>
    )
}

export default MainScreen;