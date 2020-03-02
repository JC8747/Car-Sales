import constants from "../constants";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.BUY:
      console.log(payload);
      return {
        ...state,
        additionalPrice: state.additionalPrice + payload.price,
        car: {
          ...state.car,
          features: state.car.features.concat(payload)
        },
        additionalFeatures: state.additionalFeatures.filter(
          f => f.name !== payload.name
        )
      };
    case constants.REMOVE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(f => f.name !== payload.name)
        },
        additionalFeatures: state.additionalFeatures.concat(payload)
      };
    default:
      return state;
  }
};

export default dataReducer;