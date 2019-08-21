import React from "react"
import { Link } from "react-router-dom"

export default function DogBreedImages(props) {
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>

      <Link to="/">Go back to the index</Link>

      <div>
        {props.images
          ? props.images.map((url, id) =>
            <img key={id} src={url} alt="Dog" />)
          : <p>Loading, please wait!</p>
        }
      </div>
    </div>
  )
}
