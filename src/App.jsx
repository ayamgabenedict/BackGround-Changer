import { useState } from 'react'
import Button from './components/Button';



function App() {
  const [color, setColor] = useState("olive")

  const onClickHandler =() => {
    const color = "red";
    setColor(color)
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-left top-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-5 shadow-xl bg-white px-3 py-2 rounded-3xl'>

      <button 
          onClick={onClickHandler}
          style={{backgroundColor: "red"}}
          className='outline-none px-4 py-1 rounded-full shadow-lg text-white hover:scale-x-125 hover:scale-y-125 duration-75'>
          Red
      </button>

      <Button 
          onClick={() => setColor("orange")}
          style={{backgroundColor:"orange"}}
          className={`text-white`}
          colorName={"Orange"}
      />
        
      <Button 
          onClick={() => setColor("yellow")}
          style={{backgroundColor:"yellow"}}
          // className={`text-black`}
          colorName={"Yellow"}
      />
      <Button 
          onClick={() => setColor("green")}
          style={{backgroundColor:"green"}}
          className={`text-white`}
          colorName={"Green"}
      />
      <Button 
          onClick={() => setColor("blue")}
          style={{backgroundColor:"blue"}}
          className={`text-white`}
          colorName={"Blue"}
      />
      <Button 
          onClick={() => setColor("indigo")}
          style={{backgroundColor:"indigo"}}
          className={`text-white`}
          colorName={"Indigo"}
      />
      <Button 
          onClick={() => setColor("violet")}
          style={{backgroundColor:"violet"}}
          className={`text-white`}
          colorName={"Violet"}
      />
      </div>
    </div>
  </div>
  )
}

export default App
