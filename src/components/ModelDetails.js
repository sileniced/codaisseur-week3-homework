import * as PropTypes from "prop-types";
import React from "react";

export function ModelDetails(props) {
  return (
    <div>
      <ul>
        <li>Name: {props.name}</li>
        <li>Manufacturer: {props.manufacturer}</li>
        <li>Year: {props.year}</li>
        <li>Origin: {props.origin}</li>
      </ul>
    </div>
  )
}

ModelDetails.propTypes = {
    name: PropTypes.string,
    manufacturer: PropTypes.string,
    year: PropTypes.number,
    origin: PropTypes.string
  };