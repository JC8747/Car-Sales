import React from "react";
import { removeFeature, buyItem } from "../redux/actions/dataActions";
import { connect } from "react-redux";

const AdditionalFeature = props => {
  return (
    <li>
      <button onClick={() => props.buyItem(props.feature)} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const ma = {
  removeFeature,
  buyItem
};

export default connect(null, ma)(AdditionalFeature);