import AppContainer from "./components/Common.styled";
import GlobalStyles from "./components/GlobalStyles.styled";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Main />
      </AppContainer>
    </>
  );
}

export default App;
