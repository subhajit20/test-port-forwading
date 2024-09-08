import { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  useEffect(()=>{
    // console.log("Okk")
    async function getApiResponse() {
      console.log("Okk")
        try{
          const res = await fetch("http://192.168.29.205:3000");
          const data = await res.json();
          console.log(data);
        }catch(e){
          console.log(e);
        }
    }
    getApiResponse();
  },[]);
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
