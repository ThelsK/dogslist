import React from "react"
import { Route } from "react-router-dom"
import DogsListContainer from "./components/DogsListContainer.js"
import DogBreedImagesContainer from "./components/DogBreedImagesContainer.js"
import "./App.css"

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Route exact path="/"
          component={DogsListContainer} />
        <Route path="/dog-breeds/:breed"
          component={DogBreedImagesContainer} />
      </main>
    )
  }
}
