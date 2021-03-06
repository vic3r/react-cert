import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  videoListClass: {
    textAlign: 'center',
    width: '200%',
    height: '130%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  light: {
    paddingTop: '8vh',
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '1%',
    width: 'inherit',
    height: '100vh',
  },
  dark: {
    paddingTop: '8vh',
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#222629',
    padding: '1%',
    width: 'inherit',
    height: '100vh',
  },
});
