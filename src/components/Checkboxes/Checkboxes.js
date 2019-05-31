import React, { Component} from 'react';
import PropTypes from 'prop-types'

class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  activateCheckboxChange = () => {
    const { handleCheckboxChange, label, label2 } = this.props;
    this.setState(({ isChecked }) => (
      {isChecked: !isChecked,}
      
    ));

    handleCheckboxChange(label, label2);
  }

  render() {
    const { label } = this.props;
    const {label2} =this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
        <input type="checkbox" 
        name={label}
        value={label}
        value2={label2}
        checked={isChecked}
        onChange={this.activateCheckboxChange}/>
        <span className="white-text style-product" > {label}   </span>
      </label>
      
      </div>
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
};

export default Checkbox;
