const { useState } = React;

export const ColorPicker = () => {

  const [colorPicked, setColor] = useState("#ffffff");

  return (
    <div 
    id="color-picker-container" 
    style={{backgroundColor:colorPicked}}>
      <input 
        type="color" 
        id="color-input" 
      onChange={(event) => setColor(event.target.value)}
      value={colorPicked}/>
    </div>

  )
};