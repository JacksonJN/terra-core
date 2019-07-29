import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Child element to be displayed on the right end of the header.
   * The elements passed as children are expected to be and will be treated like a collapsible menu view element.
   */
  children: PropTypes.element,

  /**
   * Content to be displayed at the start of the header, placed before the title.
   */
  startContent: PropTypes.element,

  /**
   * Text to be displayed as the title in the header bar.
   */
  title: PropTypes.string,

  /**
   * Content to be displayed at the end of the header.
   * The element passed as endContent will be wrapped in a div with flex attributes.
   */
  endContent: PropTypes.element,
  /**
   * Sets the heading level. One of `1`, `2`, `3`, `4`, `5`, `6`.
   */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

const defaultProps = {
  title: undefined,
  startContent: undefined,
  endContent: undefined,
  level: 1,
};

const Header = ({
  children, title, startContent, endContent, level, ...customProps
}) => {
  const HeaderElement = `h${level}`;

  const content = React.Children.map(children, child => (
    React.cloneElement(child, { className: cx(['flex-collapse', children.props.className]) })
  ));

  const titleElement = title ? (
    <div className={cx('title-container')}>
      <HeaderElement className={cx('title')}>
        {title}
      </HeaderElement>
    </div>
  ) : undefined;

  return (
    <div {...customProps} className={cx(['flex-header', customProps.className])}>
      {startContent && <div className={cx(['flex-end', 'start-group'])}>{startContent}</div>}
      <div className={cx('flex-fill')}>
        {titleElement}
      </div>
      {content}
      {endContent && <div className={cx(['flex-end', 'end-group'])}>{endContent}</div>}
    </div>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
