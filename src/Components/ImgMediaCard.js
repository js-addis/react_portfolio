import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Modal, Divider, Typography, Button, CardMedia, CardContent, CardActions, CardActionArea, Card } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      margin: 'auto',
      maxWidth: 1200,
      marginTop: 12,
      boxShadow: '0px 0px 1px black'
    },
    margin: 'auto',
    maxWidth: 1200,
    marginTop: 18,
    boxShadow: '0px 0px 1px black'
  },
  media: {
    height: 500,
    border: 'none',
  },
  img: {
    height: 500,
    maxWidth: 300,
    border: 'none',
  },
  h3: {
    color: '#f29898',
  },
  p: {
    color: '#989898',
  },
  modal: {
    [theme.breakpoints.down('xs')]: {
      width: '80%',
      height: '80%',
      top: '10%',
      left: '10%'
    },
    position: 'fixed',
    width: '70%',
    height: '70%',
    top: '15%',
    left: '15%',
    backgroundColor: 'white',
    boxShadow: '0px 0px 5px black',
    borderRadius: 10,
    padding: 5,
    overflowX: 'scroll',
    overflowY: 'hidden',
    display: 'flex'
  },
  modalImage: {
    minWidth: '100%',
    height: '100%',
    border: 'none',
    overflowX: 'scroll'
  },
  divider: {
    marginBottom: 15,
    margin: 0
  },
  aTag: {
    color: '#f29898',
    textDecoration: 'none'
  },
  gitHubIcon: {
    color: '#f29898'
  },
  learnMore: {
    color: '#f29898'
  },
  center: {
    display: 'flex',
    padding: 20
  }
}));

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    window.open(props.url, "_blank")
  }
  const handleClose = () => {
    setOpen(false);
  }
  const body = (
    <div className={classes.modal}>
      {props.modalContent}
    </div>
  );

  return (
    <Container>
      
      <Card className={classes.root}>
        <CardActionArea onClick={handleOpen}>
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              <h3 className={classes.h3}>{ props.projectName }</h3>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.p}>
              { props.description }
            </Typography>
          </CardContent>
        </CardActionArea>
        
        <CardActions>
          <Button size="small" color="primary">
            <GitHubIcon className={classes.gitHubIcon}/><a target="_blank" href={props.action1} className={classes.aTag}> View on Github</a>
          </Button>
          <Button size="small" color="primary" className={classes.learnMore}>
            Learn More (N/A)
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Container>
  );
}
