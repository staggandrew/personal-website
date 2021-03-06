import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DescriptionDialog from '../DescriptionDialog/DescriptionDialog';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 140,
  },
});

type InfoCardProps = {
  title: string;
  body: string;
  imageURL: string;
};

export default function InfoCard({ title, body, imageURL }: InfoCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${process.env.PUBLIC_URL}/${imageURL}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <DescriptionDialog />
      </CardActions>
    </Card>
  );
}
