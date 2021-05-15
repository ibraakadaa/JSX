import './App.css';

import img from "./imageInSrc.jpg"
import myVideo from "./myVideo.mp4"


function App() {
  return (


       
<>

<div style={{border:"solid 1px black",maxWidth:'100vw'}}>


<h1 className="title red">Your name here</h1>
<br/>


      <img src={img} alt="not found" />
      <br/>
      <img src="./imageInpublic.jpg"     />
   
    </div>  

    <video style={{ width:320, height:240}} controls >

<source src={myVideo} type ="video/mp4" />

</video>

  

</>  );
}

export default App;
