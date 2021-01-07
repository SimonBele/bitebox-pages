import React from "react";
import "./Style.css";
import Splitter from "./Splitter";
import "./bootstrap.min.css";
/**
 * Webpage Page component
 *
 * @component
 * @param {void}
 * @return {void}
 * @example
 * return (
 *    <Page >
 *    </Page>
 * )
 */

function Page(props) {
  return (
    <div className="Page">
      <Splitter ratios={[2, 8, 2]}>
        <div></div>
        <div className="Page-Main border border-top-0 border-bottom-0 border-secondary">
          {props.children}
        </div>
        <div></div>
      </Splitter>
    </div>
  );
}

Page.propTypes = {};

Page.defaultProps = {};

export default Page;
