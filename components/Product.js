import React, {Component, PropTypes} from 'react'

let checkWeight = (props, propName, componentName) => {
  const weight = props[propName];

  if (weight === undefined) {
    return new Error(`The ${propName} prop is required.`);
  }

  if (isNaN(weight)) {
    return new Error(`The ${propName} prop is not a number.`);
  }

  const isValidWeight = weight > 80 && weight < 300;

  if (!isValidWeight) {
    return new Error(`The ${propName} prop should range between 80 and 300.`);
  }
}

class Product extends Component {
  render() {
    const product = this.props
    return (
      <div>
        <h1>Name: {product.name}</h1>
        <h2>Producer: {product.producer}</h2>
        <h3>Has watermark: {product.hasWatermark ? 'Yup' : 'Naw'}</h3>
        <h3>Color: {product.color}</h3>
        <h3>Weight: {product.weight}</h3>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: checkWeight
}

module.exports = Product
