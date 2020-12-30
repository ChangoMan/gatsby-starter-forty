import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">jillian@blakeimmigration.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(703) 594-7857</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Addresses</h3>
                        <span><b>Mailing Address</b><br />
                            1727 King St., Ste 300<br />
                        Alexandria, VA 22314<br />
                        </span><br />
<span><b>Physical Address-Alexandria</b><br />
                            1517 King St.<br />
                        Alexandria, VA 22314<br />
                       </span><br />
<span><b>Physical Address-Baltimore </b><br />
                        10 E. North Avenue <br />
                        Baltimore, MD 21218<br />
                        </span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
