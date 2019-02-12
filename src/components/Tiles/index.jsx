import React from 'react'
import { css, StyleSheet } from 'aphrodite'

import Tile from './Tile'

import pic01 from '../../assets/images/pic01.jpg'
import pic02 from '../../assets/images/pic02.jpg'
import pic03 from '../../assets/images/pic03.jpg'
import pic04 from '../../assets/images/pic04.jpg'
import pic05 from '../../assets/images/pic05.jpg'
import pic06 from '../../assets/images/pic06.jpg'


const styles = StyleSheet.create({
  tiles: {
    display: 'flex',
    flexWrap: 'wrap',
    borderTop: 0
  }
})

function Tiles() {
  return (
    <div className={css(styles.tiles)}>
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
    </div>
  )
}

export default Tiles;
