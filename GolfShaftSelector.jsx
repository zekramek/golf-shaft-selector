import React from 'react';

class ShaftSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swingSpeed: '',
      ballFlight: '',
      recommendedShaft: '',
      showResults: false,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { swingSpeed, ballFlight } = this.state;
    const recommendedShaft = this.getRecommendedShaft(swingSpeed, ballFlight);

    this.setState({
      recommendedShaft: recommendedShaft,
      showResults: true,
    });
  };

  getRecommendedShaft = (swingSpeed, ballFlight) => {
    // The original getRecommendedShaft function can be used as-is.
    // Just replace "recommendedShaft" with "return".
    let recommendedShaft;

    if (swingSpeed < 80) {
      return "Senior flex";
    } else if (swingSpeed < 90) {
      if (ballFlight === "low") {
        return "Regular flex";
      } else {
        return "Stiff flex";
      }
    } else if (swingSpeed < 105) {
      if (ballFlight === "low") {
        return "Stiff flex";
      } else if (ballFlight === "medium") {
        return "Extra stiff flex";
      } else {
        return "Tour stiff flex";
      }
    } else {
      if (ballFlight === "low") {
        return "Extra stiff flex";
      } else if (ballFlight === "medium") {
        return "Tour stiff flex";
      } else {
        return "Tour extra stiff flex";
      }
    }
  };

  render() {
    const { swingSpeed, ballFlight, recommendedShaft, showResults } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="swing-speed">Swing Speed:</label>
          <input
            type="number"
            id="swing-speed"
            name="swingSpeed"
            value={swingSpeed}
            onChange={this.handleInputChange}
            required
          />
          <br />
          <label htmlFor="ball-flight">Ball Flight:</label>
          <select id="ball-flight" name="ballFlight" value={ballFlight} onChange={this.handleInputChange} required>
            <option value="">--Please select--</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <br />
          <button type="submit">Find Shaft</button>
       
