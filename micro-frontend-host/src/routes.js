import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './layouts';

const routes = () => (
  <Route path="/" element={<Layout />}>
    <Route index component={<Home />} />
    <Route path="about" element={<About />} />
  </Route>

);

export default routes;
