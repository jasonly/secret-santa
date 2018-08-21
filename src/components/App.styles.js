import { StyleSheet } from 'aphrodite';

const translateKeyframes = {
  'from': {
    transform: 'rotate(0deg)'
  },
  'to': {
    transform: 'rotate(360deg)'
  }
};

const Styles = StyleSheet.create({
  textAlignCenter: {
    textAlign: 'center'
  },
  appLogo: {
    animationName: [translateKeyframes], // https://github.com/Khan/aphrodite#animations
    animationDuration: '20s',
    animationIterationCount: 'infinite',
    height: '80px'
  },
  appHeader: {
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: 'white'
  },
  appTitle: {
    fontSize: '1.5em'
  },
  appIntro: {
    fontSize: 'large'
  }
});

export default Styles;
