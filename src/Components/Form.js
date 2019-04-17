import React, { Component } from 'react';
import '../App.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", globalTitle: "Life cycle"};
  }

      componentDidMount() {
        console.log("Formulaire rendu")
      }

      handleChange = event => {
        this.setState({title: event.target.value});
      };

      handleChangeGlobalTitle = event => {
        event.preventDefault()
        this.setState({globalTitle: `Mon formulaire - ${this.state.title}`});
      };

    render() {
      console.log(this.state.title)
      return (
        <div className="FormCycle">
        <h1>{this.state.globalTitle}</h1>
        <form onSubmit={this.handleChangeGlobalTitle}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="textarea">Commentaire</label>
              <input
                type="textarea"
                id="title"
                name="title"
                onChange={this.handleChange}
                value={this.state.title}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Validation"/>
            </div>
          </fieldset>
        </form>
       </div>
      );
    }
  }

  // onClick={this.CycleMessage()}

export default Form;
