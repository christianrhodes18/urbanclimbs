import { MantineProvider, Text } from '@mantine/core';
import { Welcome } from './pages/Welcome'
import { NotFound } from './pages/NotFound';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Climbs from './pages/Climbs';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/climbs" element={<Climbs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;