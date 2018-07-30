import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
// import Divider from '@material-ui/core/Divider';
// import MenuIcon from '@material-ui/Menu';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import Logo from'./img/logo3.svg';
import {Link} from 'react-router-dom'
import ProfileCompletion from './profileCompletion';
import HomeSwitch from './HomeSwitch';
import Icon from '@material-ui/core/Icon';
import Footer from './Footer.js';
import Card from '@material-ui/core/Card';

const drawerWidth = 300;
//const drawerWidth = 30vw;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 'auto',
    // zIndex: 1,
    // overflow: 'hidden',
    // position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      // width: `calc(100% - 0px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class ResponsiveDrawer extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: [],
      error: 0,
      mobileOpen: false,
    };
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  componentDidMount() {
    fetch('/api/profile')
      .then(res => res.json())
      .then(profile => this.setState({profile}, () => console.log('profile fetched...', profile)));
      // .catch(function() { this.setState({error: "Server Side failed to respond!"}), console.log(this.error); }); end of CATCH
  }

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        {/* <div className={classes.toolbar} /> */}
        <div className="Profile" />
        {/* <Divider /> */}

        <Card>
        {this.state.profile.map(user =>
            <div key={user.id}>
            <div className="name">{user.first_name} {user.last_name}</div>
            <ProfileCompletion randomVariable={1}/>
                  <div className="user-info">
                            <Typography component="h2">
                              <li>Email:</li>
                              <li> {user.email}</li>
                            </Typography>
                            <Typography component="h2">
                              <li>Field of Study:</li>
                              <li> {user.fs}</li>
                            </Typography>
                            <Typography component="h2">
                              <li>Level of Education: </li>
                              <li>{user.ledu}</li>
                            </Typography>
                  </div>
              </div>
        )}
        </Card>


      </div>
    );

    return (
      <div className={classes.root}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Icon
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >person
                {/* <Icon>person</Icon> */}
                {/* <Icon>account_circle</Icon> */}
              </Icon>
              <Link to="/HomePage"><img src={Logo} alt="Eduvisors logo"/></Link>
            </Toolbar>
          </AppBar>
          <main className={classes.content}>
          <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
              <Drawer
                variant="permanent"
                open
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
          </Hidden>

                      <HomeSwitch match={this.props.match}/>
          </main>
          <Footer />
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
