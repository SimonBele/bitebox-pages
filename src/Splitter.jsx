import React from "react";
import PropTypes from "prop-types";
import "./Style.css";

/**
 * Webpage Splitter component
 *
 * @component
 * @param {void}
 * @return {void}
 * @example
 * return (
 *    <Splitter ratios={[3,1,1,1]}>
 *      <Logo />
 *      <Logo />
 *      <Logo />
 *      <Logo />
 *    </Splitter>
 * )
 */

function Splitter({ children, ratios = [], type = "horizontal", align }) {
  const childrenCount = React.Children.count(children);
  let gridTemplateColumns = "repeat(" + childrenCount + ", 1fr)";
  if (childrenCount === ratios.length)
    gridTemplateColumns = ratios.join("fr ") + "fr";

  const gridStyle = {
    textAlign: align,
    display: "grid",
    gridTemplateColumns: gridTemplateColumns,
    gridTemplateRows: "1fr",
    gridColumnGap: "0px",
    gridRowGap: "0px",
  };

  return (
    <div className="nav-container" style={gridStyle}>
      {children}
    </div>
  );
}

Splitter.propTypes = {
  /**
   * Ratios for distributing the element horizontally
   */
  ratios: PropTypes.array,
  align: PropTypes.string,
};

Splitter.defaultProps = {
  type: "horizontal",
  align: "left",
};

export default Splitter;
