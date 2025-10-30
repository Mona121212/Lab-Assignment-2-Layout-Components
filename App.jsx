/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native-safe-area-context';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';


function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />

    </SafeAreaView>
  );
}



export default App;
