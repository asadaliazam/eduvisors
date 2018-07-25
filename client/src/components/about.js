import React, { Component } from 'react';
import Logo from'./img/logo3.svg';
import {Link} from 'react-router-dom'
// =========================The our team card================
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// ======================Humberger menu for header=============
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// ======================Humberger menu for header=============
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Profile from './profile.js';
// import MainContent from './MainContent.js';
import Footer from './Footer.js';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (

  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

// =============starts from here===============


class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {
    return (


      <div className="HomePage-Content">

              <Menu/>
              <div className = "Main-Content">
                  <Profile/>

                  <div>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography className={classes.title} color="textSecondary">
                          Word of the Day
                        </Typography>
                        <Typography variant="headline" component="h2">
                          be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                          adjective
                        </Typography>
                        <Typography component="p">
                          well meaning and kindly.<br />
                          {'"a benevolent smile"'}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Learn More</Button>
                      </CardActions>
                    </Card>
                  </div>
                  {/* <MainContent/> */}
              </div>
              <Footer />

      </div>

    );
  }
}

export default withStyles(styles)(SimpleCard);
