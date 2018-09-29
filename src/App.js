import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import {
  addModel,
  setModels
} from './actions/AppActions'

import { ModelDetails } from "./components/ModelDetails";

import './App.css';

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
    !this.props.models.length && this.props.setModels(data);
  }

  updateSelection = event => {
    this.setState({
      option: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    const model = this.props.models.find(computerModel => computerModel.name === this.state.option);
    this.props.addModel(model);
  };

  render() {
    return (
      <div className="App">
        {!this.props.models.length && 'loading'}
        {this.props.renderedModels.map(model => <ModelDetails {...model} />)}
        <form>
          <select onChange={this.updateSelection}>
            <option value="">-- pick a model --</option>
            {this.props.models.map(computerModel => (
              <option value={computerModel.name}>
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

const mapStateToProps = ({ models, renderedModels }) => ({ models, renderedModels });

const mapDispatchToProps = {
  setModels,
  addModel
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
