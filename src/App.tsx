import React from 'react';
import { MantineProvider, Text } from '@mantine/core';
import { Welcome } from './pages/Welcome'
import { NotFound } from './pages/NotFound';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;