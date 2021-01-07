import React from "react";
import Splitter from "./Splitter";
import "./Style.css";
import "./bootstrap.min.css";

/**
 * Webpage Nav component
 *
 * @component
 * @param {void}
 * @return {void}
 * @example
 * return (
 *    <Nav>
 *    </Nav>
 * )
 */

function Nav(props) {
  return (
    <div>
      <nav className="navbar navbar-nav navbar-brand navbar-height bg-dark sticky-top">
        <Splitter ratios={[2, 8, 2]}>
          <div></div>
          <div>
            <h1 className="h1 text-light">BiteBox</h1>
          </div>
          <div>
            <Splitter ratios={[1, 1, 1]} align="center">
              {props.children}
            </Splitter>
          </div>
        </Splitter>
      </nav>
    </div>
  );
}

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;