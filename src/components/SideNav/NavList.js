import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HomeIcon from 'material-ui-icons/Home';
import InfoIcon from 'material-ui-icons/Info';
import {Link, withRouter} from "react-router-dom";

const styles = theme => ({
    root: {
        width: 360,
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

function NavList(props) {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <Link to="/">
                    <ListItem
                        button
                    >

                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>

                    </ListItem>
                </Link>
                <Link to="/about">
                    <ListItem button>
                        <ListItemIcon>
                            <InfoIcon/>
                        </ListItemIcon>
                        <ListItemText primary="About"/>
                    </ListItem>
                </Link>
                <Link to="/topics">
                    <ListItem button>
                        <ListItemIcon>
                            <InfoIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Topics"/>
                    </ListItem>
                </Link>
            </List>

        </div>
    );
}

NavList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter( withStyles(styles)(NavList));