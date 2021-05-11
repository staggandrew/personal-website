import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => {
  return {
    time: {
      fontFize: '20px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      fontFamily: 'Source Sans Pro',
    },
  };
});

const Time = () => {
  const classes = useStyles();

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    });
    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentTime = date.toLocaleTimeString('en', {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  });

  return (
    <Typography className={classes.time} variant="h6" noWrap>
      {currentTime}
    </Typography>
  );
};

export default Time;