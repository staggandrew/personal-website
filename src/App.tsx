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
  Grid,
  Paper,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Header from './components/Header';
import Time from './components/Time/Time';
import Snack from './components/Snack/Snack';
import InfoCard from './components/InfoCard/InfoCard';
import DescriptionDialog from './components/DescriptionDialog/DescriptionDialog';

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
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      fontFize: '20px',
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      fontFamily: 'Source Sans Pro',
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
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  };
});

const App: FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Snack message="Welcome to my site!" />
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
                <Typography className={classes.title} noWrap>
                  Andrew Stagg
                </Typography>
                <Time />
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ paddingTop: '2em' }}
            spacing={1}
          >
            <Grid item xs={12} sm={6} md={3}>
              <InfoCard
                title="About Me"
                body="I'm a Software Engineer with a passion for new tech and music production."
                imageURL="portrat.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InfoCard
                title="Max"
                body="This is Max, the dog with an obsession to tennis balls."
                imageURL="max.jpg"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <InfoCard
                title="Box Stacking Game"
                body="Small box stacking game I've created in college using Box2D."
                imageURL="box-stacker.png"
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default App;
