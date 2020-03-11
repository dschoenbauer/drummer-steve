import React, { Component } from 'react'
import './Lessons.css';

export class Lessons extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className='guttered lessonsContent'>
                <div className='section green intro'>
                    <h2>Welcome to Have Fun Play Drums!</h2>
                    <p>With your host Steve Paoli~Drummer-Singer-and Teacher. Have Fun Play Drums is a unique teaching method Steve created to get you playing drums within days! Business is Booming, so <a href='tel:612-242-6040'>call</a> or <a href='mailto:spaoli34@gmail.com'>email</a> Steve today about getting started on the fun of playing drums!!</p>
                    <h2>Drum Lesson Rates:</h2>
<p>
                        All lessons are one-on-one and payable the day of the lesson, unless previous arrangements are made. Bring in any songs you would like to learn to play!
</p>
</div>
                <div className='section green mstudio'>
                    <h3>My Studio:</h3>
                    <ul>
                        <li>30 min lesson-$25.00</li>
                        <li>60 min lesson-$45.00</li>
                        <li>90 min lesson-$75.00</li>
                    </ul>
                </div>
                <div className='section green ystudio'>
                    <h3>Your Studio (or house)</h3>
                    <ul>
                        <li>30 min lesson-35.00</li>
                        <li>60 min lesson-55.00</li>
                        <li>90 min lesson-85.00</li>
                    </ul>


                </div>
            </div>
        )
    }
}

export default Lessons
