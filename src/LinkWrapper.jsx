import React from 'react';
import PropTypes from 'prop-types';
import './Style.css';

/**
 * Webpage Text component
 *
 * @component
 * @param {void}
 * @return {void}
 * @example
 * return (
 *    <Text>
 *    </Text>
 * )
 */

function LinkWrapper(props) {
    return (
        <div className="LinkWrapper">
            <Link className={props.className} to={props.to}> {props.children}</Link>
        </div>
    );
}

<Link className={"nav-link"} to={"/"}>Home</Link>

Text.propTypes = {
};

Text.defaultProps = {
}

export default Text;