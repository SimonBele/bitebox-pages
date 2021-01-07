import React from 'react';
import PropTypes from 'prop-types';
import './Style.css';


/**
 * Webpage Logo component
 *
 * @component
 * @param {void}
 * @return {void}
 * @example
 * return (
 *   <Logo />
 * )
 */

function Logo({something}) {
    
    return (
        <div className="Logo">
           {something}
        </div>
    );
}

Logo.propTypes = {
  /**
   * Logo prop1
   */
    something: PropTypes.string
};

Logo.defaultProps = {
    something: "nevem"
}

export default Logo;