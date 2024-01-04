import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  return <>
  <div id="dashboard">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  </div>
  </>
};

export default App;
