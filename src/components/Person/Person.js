import React from 'react'
import './styles.css'
import dp from '../../img/dp.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
export default function Person() {
    return (
        <div>
            <a href="#home">
                <div className="container-fluid counter-style counter-counter main ">
                    <div className=" row ">
                        <div className="col-3 ">
                            <img className="img-fluid my-image" src={dp} alt="profile pic" />
                        </div>
                        <div className="col-7">
                            <div className="name">
                                Emmanuel Lartey
                        </div>
                            <div className="status">
                                Hey I am alive
                        </div>
                        </div>
                        <div className="col-2" class="font-style">
                            <FontAwesomeIcon icon={faDotCircle} size="xs"/>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
