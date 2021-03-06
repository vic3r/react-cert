import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

export default makeStyles((theme) => ({
  dark: {
    backgroundColor: '#61892F',
  },
  light: {
    backgroundColor: '#474B4F',
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const CustomSwitch = withStyles({
  switchBase: {
    color: 'white',
    '&$checked': {
      color: 'dark',
    },
    '&$checked + $track': {
      backgroundColor: 'dark',
    },
  },
  checked: {},
  track: {},
})(Switch);

export { CustomSwitch };
