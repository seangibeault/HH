import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import {connect} from "react-redux";
import {setOpen} from "../../actions/sideNavActions";
import {bindActionCreators} from "redux";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class AppTitleBar extends React.Component {
    openSideNav = () => {
        this.props.setOpen(true);
    };


    render()
    {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={this.openSideNav} className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon  />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Homeless Hook up
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

AppTitleBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setOpen: setOpen
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AppTitleBar));