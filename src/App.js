import React , {useEffect,useState} from 'react'
import "./App.css"
import {Button, Container, Grid} from "@material-ui/core"
import MyCard from './components/MyCard'
import Navbar from './components/Navbar'
import {getMatches} from './api/api'
function App(){

  const [matches,setMatches] = useState([])

  useEffect(() => {
    getMatches()
    .then((data)=> {console.log(data); setMatches(data.matches)})
    .catch((error)=>alert("Could not load",error));
    
  }, [])
  return (
    <div className="App">
      
      <Navbar/>
    
      <h1>Welcome to CrickLive Score</h1>
      
      <Container>
        <Grid container>
          <Grid sm="2"></Grid>
          <Grid sm="8" >
            {
              matches.map((match)=>(
                
              <MyCard key={match.unique_id} match ={match}/>
              
              
              ))
        
            }
            
      <Button variant="outlined" color="primary"></Button>
      </Grid>
      </Grid>
      </Container>
    </div>
  )
}
export default App