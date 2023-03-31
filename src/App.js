import { QueryClient, QueryClientProvider } from "react-query";
import Homepage from './Pages/Home/Homepage';
import LoginPage from './Pages/Login/LoginPage';
import TestPage from './Pages/Tests/TestPage1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestPage2 from './Pages/Tests/TestPage2';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
     
     <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/nextpage" element={<TestPage/>} />
          <Route path="/nextdata" element={<TestPage2/>} />
        </Routes>
      </Router>
    </div>
    </QueryClientProvider>
  );
}

export default App;
