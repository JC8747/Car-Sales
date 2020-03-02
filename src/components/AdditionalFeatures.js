import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { removeFeature, buyItem } from "../redux/actions/dataActions";
import { connect } from "react-redux";

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const ma = {
  removeFeature,
  buyItem
};

export default connect(null, ma)(AdditionalFeatures);