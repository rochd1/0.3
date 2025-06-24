import React from 'react';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { store } from './store';
import AddTask from './components*/AddTask';
import ListTask from './components*/ListTask';

function App() {
  return (
    <Provider store={store}>
      <Container className="mt-5" style={{ maxWidth: '600px' }}>
        <h1 className="text-center mb-4">ToDo Application</h1>
        <AddTask />
        <ListTask />
      </Container>
    </Provider>
  );
}

export default App;