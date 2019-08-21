import React from "react"
import request from "superagent"
import DogsList from "./DogsList"

export default class DogsListContainer extends React.Component {
  state = {
    dogBreeds: null
  }

  componentDidMount() {
    request
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response =>
        this.updateBreeds(response.body.message))
      .catch(console.error)
  }

  updateBreeds = breeds =>
    this.setState({ dogBreeds: Object.keys(breeds) })

  render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />
  }
}
