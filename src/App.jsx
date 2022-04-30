import './App.css';
import { Button } from './components/button.styles';
import {
  AppContainer,
  ButtonsContainer,
} from './components/AppContainer.styles';
import { GlobalStyles } from './components/GlobalStyles.styles';
/* 
 Add disabled option to all variants 
 support hover and click
add color support
(color = primary color = ff9f00, secondary = what ever you like , color = success = green, color = error = red)
support size. 3 different sizes , small , medium , large
 */
function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <ButtonsContainer>
        <Button variant="contained">contained</Button>
        <Button variant="outline">outline</Button>
        <Button variant="text">text</Button>
        <Button variant="disabled">disabled</Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
      </ButtonsContainer>
      <ButtonsContainer>
        <Button color="primary">primary</Button>
        <Button color="success">success</Button>
        <Button color="secondary">secondary</Button>
        <Button color="error">error</Button>
      </ButtonsContainer>
    </AppContainer>
  );
}

export default App;
