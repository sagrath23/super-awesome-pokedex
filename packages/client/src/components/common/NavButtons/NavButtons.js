import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const styles = {
  root: {
    width: 500,
  },
};

const NavigationButtons = ({ classes, items }) => {
  return (
    <BottomNavigation
      value={0}
      onChange={() => {}}
      showLabels
      className={classes.root}
    >
      { items.map((item) => (<BottomNavigationAction label={item.label} icon={item.icon} />))}
    </BottomNavigation>
  );
}

NavigationButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.node.isRequired
  }))
};

NavigationButtons.defaultProps = {
  items: []
};

export default withStyles(styles)(NavigationButtons);
