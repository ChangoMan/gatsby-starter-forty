import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Tile from '../components/Tile'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                      <Tile
                        bgImage={pic01}
                        title='Aliquam'
                        url='/landing'
                        subtitle='Ipsum dolor sit amet'
                        bgColor='#6fc3df'
                        wide={true}
                      />
                      <Tile
                        bgImage={pic02}
                        title='Tempus'
                        url='/landing'
                        subtitle='feugiat amet tempus'
                        bgColor='#8d82c4'
                        wide={false}
                      />
                      <Tile
                        bgImage={pic03}
                        title='Magna'
                        url='/landing'
                        subtitle='Lorem etiam nullam'
                        bgColor='#ec8d81'
                        wide={false}
                      />
                      <Tile
                        bgImage={pic04}
                        title='Ipsum'
                        url='/landing'
                        subtitle='Nisl sed aliquam'
                        bgColor='#e7b788'
                        wide={true}
                      />

                      <Tile
                        bgImage={pic05}
                        title='Consequat'
                        url='/landing'
                        subtitle='Ipsum dolor sit amet'
                        bgColor='#8ea9e8'
                        wide={true}
                      />
                      <Tile
                        bgImage={pic06}
                        title='Etiam'
                        url='/landing'
                        subtitle='Feugiat amet tempus'
                        bgColor='#87c5a4'
                        wide={false}
                      />
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
