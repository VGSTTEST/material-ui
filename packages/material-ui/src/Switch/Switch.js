// @inheritedComponent IconButton

import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { refType } from '@material-ui/utils';
import withStyles from '../styles/withStyles';
import { alpha, darken, lighten } from '../styles/colorManipulator';
import capitalize from '../utils/capitalize';
import SwitchBase from '../internal/SwitchBase';

export const styles = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    width: 34 + 12 * 2,
    height: 14 + 12 * 2,
    overflow: 'hidden',
    padding: 12,
    boxSizing: 'border-box',
    position: 'relative',
    flexShrink: 0,
    zIndex: 0, // Reset the stacking context.
    verticalAlign: 'middle', // For correct alignment with the text.
    '@media print': {
      colorAdjust: 'exact',
    },
  },
  /* Styles applied to the root element if `edge="start"`. */
  edgeStart: {
    marginLeft: -8,
  },
  /* Styles applied to the root element if `edge="end"`. */
  edgeEnd: {
    marginRight: -8,
  },
  /* Styles applied to the internal `SwitchBase` component's `root` class. */
  switchBase: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1, // Render above the focus ripple.
    color: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[300],
    transition: theme.transitions.create(['left', 'transform'], {
      duration: theme.transitions.duration.shortest,
    }),
    '&$checked': {
      transform: 'translateX(20px)',
    },
    '&$disabled': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&$checked + $track': {
      opacity: 0.5,
    },
    '&$disabled + $track': {
      opacity: theme.palette.mode === 'light' ? 0.12 : 0.2,
    },
  },
  /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
  colorPrimary: {
    '&$checked': {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&$disabled': {
        color:
          theme.palette.mode === 'light'
            ? lighten(theme.palette.primary.main, 0.62)
            : darken(theme.palette.primary.main, 0.55),
      },
    },
    '&$checked + $track': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
  colorSecondary: {
    '&$checked': {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: alpha(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
      '&$disabled': {
        color:
          theme.palette.mode === 'light'
            ? lighten(theme.palette.secondary.main, 0.62)
            : darken(theme.palette.secondary.main, 0.55),
      },
    },
    '&$checked + $track': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  /* Styles applied to the root element if `size="small"`. */
  sizeSmall: {
    width: 40,
    height: 24,
    padding: 7,
    '& $thumb': {
      width: 16,
      height: 16,
    },
    '& $switchBase': {
      padding: 4,
      '&$checked': {
        transform: 'translateX(16px)',
      },
    },
  },
  /* Pseudo-class applied to the internal `SwitchBase` component's `checked` class. */
  checked: {},
  /* Pseudo-class applied to the internal SwitchBase component's disabled class. */
  disabled: {},
  /* Styles applied to the internal SwitchBase component's input element. */
  input: {
    left: '-100%',
    width: '300%',
  },
  /* Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
  thumb: {
    boxShadow: theme.shadows[1],
    backgroundColor: 'currentColor',
    width: 20,
    height: 20,
    borderRadius: '50%',
  },
  /* Styles applied to the track element. */
  track: {
    height: '100%',
    width: '100%',
    borderRadius: 14 / 2,
    zIndex: -1,
    transition: theme.transitions.create(['opacity', 'background-color'], {
      duration: theme.transitions.duration.shortest,
    }),
    backgroundColor:
      theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white,
    opacity: theme.palette.mode === 'light' ? 0.38 : 0.3,
  },
});

const Switch = React.forwardRef(function Switch(props, ref) {
  const {
    classes,
    className,
    color = 'secondary',
    edge = false,
    size = 'medium',
    ...other
  } = props;

  const icon = <span className={classes.thumb} />;

  return (
    <span
      className={clsx(
        classes.root,
        {
          [classes.edgeStart]: edge === 'start',
          [classes.edgeEnd]: edge === 'end',
          [classes[`size${capitalize(size)}`]]: size !== 'medium',
        },
        className,
      )}
    >
      <SwitchBase
        type="checkbox"
        icon={icon}
        checkedIcon={icon}
        classes={{
          root: clsx(classes.switchBase, classes[`color${capitalize(color)}`]),
          input: classes.input,
          checked: classes.checked,
          disabled: classes.disabled,
        }}
        ref={ref}
        {...other}
      />
      <span className={classes.track} />
    </span>
  );
});

Switch.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component is checked.
   */
  checked: PropTypes.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'secondary'
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: PropTypes.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: PropTypes.oneOf(['end', 'start', false]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,
  /**
   * The id of the `input` element.
   */
  id: PropTypes.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: PropTypes.func,
  /**
   * If `true`, the `input` element is required.
   */
  required: PropTypes.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size: PropTypes.oneOf(['medium', 'small']),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: PropTypes.any,
};

export default withStyles(styles, { name: 'MuiSwitch' })(Switch);
