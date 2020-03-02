import React from "react";
import { removeFeature, buyItem } from "../redux/actions/dataActions";
import { connect } from "react-redux";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.removeFeature(props.feature)}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const ma = {
  removeFeature,
  buyItem
};

export default connect(null, ma)(AddedFeature);