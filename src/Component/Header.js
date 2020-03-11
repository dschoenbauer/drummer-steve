import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import './Header.css';

library.add(faPhoneAlt);

export class Header extends Component {
    static propTypes = {

    }
    render() {
        return (
            <header className='header guttered'>
                <nav className='nav'>
                    <Link to="/"><i></i> Home</Link>
                    <Link to="/bio"><i></i> Bio</Link>
                    <Link to="/lessons"><i></i> Lessons</Link>
                    <Link to="/representation"><i></i> Representation</Link>
                    <Link to="/gallery"><i></i> Gallery</Link>
                    <Link to="/schedule"><i></i> Schedule</Link>
                </nav>
                <div className='callToAction'>
                    <a href="tel:612-242-6040">
                        <FontAwesomeIcon icon={faPhoneAlt} /> Call 612-242-6040
                    </a>
                </div>
            </header>
        )   
    }
}

export default Header
