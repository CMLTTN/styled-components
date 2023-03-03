import { Button, FS13Button } from "./components/Buton.styled";
import HeaderText from "./components/HeaderText";
import Links from "./components/Lİnks";
import Sarmal from "./components/Sarmal";

const App = () => {
  return (
    <>
    <Sarmal bg="#bebe" >
      <HeaderText renk="blue" >Styled Components</HeaderText>
      <HeaderText renk="#b43456" bgRenk="yellow" >Styled Components</HeaderText>
      <Button  >Send</Button>
      <Button primary >Send</Button>
      <FS13Button react >CALIS</FS13Button>
      <FS13Button>DINLEN</FS13Button>
    </Sarmal>

  <Sarmal>
   <Links href="http://www.clarusway.com" target="_blank" >Clarusway Web Site</Links> 
   <Links small href="http://www.reactjs.org" target="_blank" >React JS</Links> 
   <Links small href="http://www.npmjs.org" target="_blank" >NPM</Links> 
  </Sarmal>
    
    </>
    
  );
};

export default App;
