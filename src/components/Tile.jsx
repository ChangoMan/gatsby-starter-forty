import React from 'react'
import { Link } from 'gatsby'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  article: {
    alignItems: 'center',
    display: 'flex',
    transition: 'transform 0.25s ease, opacity 0.25s ease, filter 1s ease',
    padding: '4em 4em 2em 4em',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'default',
    height: '40vh',
    maxHeight: '40em',
    minHeight: '23em',
    overflow: 'hidden',
    position: 'relative',
    ':before': {
      transition: 'opacity 0.5s ease',
      bottom: '0',
      content: '""',
      display: 'block',
      height: '100%',
      left: '0',
      opacity: '0.85',
      position: 'absolute',
      width: '100%',
      zIndex: '2',
    },
    ':hover': {
      ':before': {
        opacity: 0
      }
    },
    ':after': {
      backgroundColor: 'rgba(36, 41, 67, 0.25)',
      content: '""',
      display: 'block',
      height: '100%',
      left: '0',
      position: 'absolute',
      top: '0',
      width: '100%',
      zIndex: '1',
    },
    '@media screen and (max-width: 1280px)': {
      padding: '4em 3em 2em 3em',
      height: '30vh',
      maxHeight: '30em',
      minHeight: '20em'
    },
    '@media screen and (max-width: 980px)': {
      width: '50%',
    },
    '@media screen and (max-width: 736px)': {
      padding: '3em 1.5em 1em 1.5em',
      height: '16em',
      maxHeight: 'none',
      minHeight: 0,
    },
    '@media screen and (max-width: 480px)': {
      height: '20em',
      width: '100%',
    }
  },

  headerWrapper: {
    position: 'relative',
    zIndex: '3',
    width: 'max-content',
    marginBottom: '2em',
  },
  title: {
    fontSize: '1.75em',
    marginBottom: 0,
    width: 'calc(100% + 0.5em)',
    '@media screen and (max-width: 736px)': {
      fontSize: '1.5em'
    },
    ':after': {
      content: '""',
      backgroundColor: '#ffffff',
      display: 'block',
      height: '2px',
      margin: '0.325em 0 0.5em 0',
      width: '100%',
    }
  },
  subtitle: {
    margin: '0 0 2em 0',
    fontSize: '0.7em',
    fontWeight: '600',
    letterSpacing: '0.25em',
    marginBottom: '0',
    textTransform: 'uppercase',
  },
  link: {
    border: '0',
    height: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '100%',
    zIndex: '4',
  }
})

function Tile({ title, subtitle, url, bgImage, bgColor, wide }) {
  const dynamicStyles = StyleSheet.create({
    bgImage: {
      backgroundImage: `url(${bgImage})`
    },
    bgColor: {
      ':before': {
        backgroundColor: bgColor
      }
    },
    skinny: {
      width: '40%'
    },
    wide: {
      width: '60%'
    }
  });
  return(
    <article
      className={css(
        styles.article,
        dynamicStyles.bgImage,
        dynamicStyles.bgColor,
        wide ? dynamicStyles.wide: dynamicStyles.skinny,
      )}
    >
     <header className={css(styles.headerWrapper)}>
        <h3 className={css(styles.title)}>
          {title}
        </h3>
        <p className={css(styles.subtitle)}>
          {subtitle}
        </p>
      </header>
      <Link to={url} className={css(styles.link)}></Link>
    </article>
  )
}

export default Tile
