import React from 'react'
import './styles.css'
import testImage from '../../img/2.jpg'
import testVideo from '../../video/vid1.mp4'


export default function ChattingArea() {
    return (
        <div className="container-fluid">
            <div className="row  data-mine">
                Chatting Magna occaecat excepteur aliqua voluptate anim elit cupidatat excepteur enim. Pariatur non ut proident aute tempor Lorem ad magna ea deserunt ea cillum pariatur. Amet commodo dolor minim tempor laborum ullamco labore commodo deserunt duis. Velit cillum mollit amet minim id ea eu sit occaecat et labore velit. Aliquip pariatur magna mollit enim veniam duis duis tempor sit. Cillum ut sunt cupidatat labore exercitation Lorem ullamco consectetur nostrud.
            </div>
            <div className="row data-friend">
               this is an imojie 🍔
            </div>
            <div className="row data-mine">
                1 2 3
            </div>
            <div className="row data-friend">
                <img className="rounded img-style " src={testImage} alt=""/>
            </div>
            <div className="row data-mine" >
                <iframe src={testVideo} title="video" ></iframe>
            </div>
            <div className="row data-friend">
                Chatting Magna occaecat excepteur aliqua voluptate anim elit cupidatat excepteur enim. Pariatur non ut proident aute tempor Lorem ad magna ea deserunt ea cillum pariatur. Amet commodo dolor minim tempor laborum ullamco labore commodo deserunt duis. Velit cillum mollit amet minim id ea eu sit occaecat et labore velit. Aliquip pariatur magna mollit enim veniam duis duis tempor sit. Cillum ut sunt cupidatat labore exercitation Lorem ullamco consectetur nostrud.
            </div>

        </div>
    )
}
