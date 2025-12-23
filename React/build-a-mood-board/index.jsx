export function MoodBoardItem ({color,image,description}) {


  return (
    <div className="mood-board-item" style={{backgroundColor:color}}>
    <img className="mood-board-image" src={image} style={{ width: '200px', height: 'auto' }}/>
    <h3 className="mood-board-text">{description}</h3>
    </div>
  )
}

export function MoodBoard() {
  const destinations = [
    { id:"1",
      color: "green",
      image:"https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description:"Jurassic Park"},
    { id:"2",
      color: "blue",
      image:"https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description:"The Beach"},
    { id:"3",
      color:"orange",
      image:"https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description:"Long Grass"}
  ]


  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {destinations.map((location)=> (
          <MoodBoardItem
            key={location.id}
            color={location.color}
            image={location.image}
            description={location.description}
            />
        ))}
      </div>

    </div>
  )
}