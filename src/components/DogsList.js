import React from "react"
import { Link } from "react-router-dom"

export default class DogsList extends React.Component {
  render() {
    return (
      <div className="dogs-list">
        <h1>List of Dog Breeds</h1>
        {this.props.dogBreeds
          ? this.props.dogBreeds.map(dogBreed => (
            <li key={dogBreed}>
              <Link to={`/dog-breeds/${dogBreed}`}>
                {dogBreed}
              </Link>
            </li>))
          : <li>Loading, please wait!</li>
        }
      </div>
    )
  }
}
