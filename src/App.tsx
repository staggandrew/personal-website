import React, { FC, useState } from 'react';
import './App.css';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  InputBase,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Header from './components/Header';
import Time from './components/Time/Time';

interface Props {}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    header: {
      backgroundColor: '#393939',
      minHeight: '80px',
      fontFamily: 'Source Sans Pro',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontFize: '20px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      fontFamily: 'Source Sans Pro',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
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
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    physics: {
      backgroundColor: '#3D508E',
      minHeight: '400px',
      fontFize: '20px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      flexGrow: 1,
      fontFamily: 'Source Sans Pro',
    },
  };
});

const App: FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.header}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Andrew Stagg
            </Typography>
            <Time />
          </Toolbar>
        </AppBar>
        <div className={classes.physics}>
          <span>Physics Demo</span>
        </div>
      </div>
    </div>
  );
};

export default App;
