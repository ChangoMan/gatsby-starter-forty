import React from 'react'
import moment from 'moment'

const copyright = `Aaron Darrah - ${moment().year()}`

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="copyright">
                <li>&copy; {copyright}</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
