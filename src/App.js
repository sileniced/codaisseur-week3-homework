import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import {addRenderedComputerModels, setComputerModels} from './actions/AppActions'

import './App.css';
import {ModelDetails} from "./components/ModelDetails";

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
};


class App extends PureComponent {
  state = {};

  componentDidMount() {
    !this.props.computerModels.length && this.props.setComputerModels(data);
  }

  updateSelection = event => {
    this.setState({option: event.target.value})
  };

  handleSubmit = event => {
    event.preventDefault();
    const computerModel = this.props.computerModels.find(computerModel => computerModel.name === this.state.option);
    this.props.addRenderedComputerModels(computerModel);
  };

  render() {
    return (
      <div className="App">
        {!this.props.computerModels.length && 'loading'}
        {this.props.renderedComputerModels.map(model => <ModelDetails {...model} />)}
        <form>
          <select onChange={this.updateSelection}>
            <option value="">-- pick a model --</option>
            {this.props.computerModels.map(computerModel => (
              <option
                key={computerModel.slug}
                value={computerModel.name}
              >
                {computerModel.name} ({computerModel.year})
              </option>
            ))}
          </select>
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({
                           computerModels,
                           renderedComputerModels
                         }) => ({
  computerModels,
  renderedComputerModels
});

const mapDispatchToProps = {
  setComputerModels,
  addRenderedComputerModels
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
