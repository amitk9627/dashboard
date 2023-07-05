import './App.css';
import { Container,  } from '@mui/material';
import AvatarProfile from './sidebar/AvatarProfile';
import ListSide from './sidebar/ListSide';
import TopContainer from './Container/TopContainer';
import BottomContainer from './Container/BottomContainer';
function App() {
  return (
    <Container sx={{ display: "flex", flexDirection: "row", }} maxWidth="xl">
      <Container fixed sx={{ bgcolor: "#333", width: "350px" }}>
        <AvatarProfile />
        <ListSide />
      </Container>

      <Container sx={{ width:"calc(100%-350px)"}}>
        {/* <TopContainer /> 
        ess wali file me ek error hai mujhe nahi mil raha*/}
        <BottomContainer />
      </Container>
    </Container>
  );
}

export default App;
