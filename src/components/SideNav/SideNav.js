import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {setOpen} from "../../actions/sideNavActions";
import NavList from "./NavList";

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class SideNav extends React.Component {
    closeDrawer =() => {
        this.props.setOpen(false);
    };

    render() {
        const {open} = this.props;

        return (
            <Drawer open={open} onClose={this.closeDrawer}>
                <NavList />
            </Drawer>
        );
    }
}

SideNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        open: state.sideNav.open
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setOpen: setOpen
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SideNav));
