import React from "react";
import './App.css';

import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { PDFViewer } from '@react-pdf/renderer'
import MyDocument from './components/MyDocument/MyDocument'

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  doc: {
    width: 100,
    height: 100,
  },
});

function App() {
  return (
    <div className="App">
      {/* <PDFViewer className="pdf-viewer" >
        <MyDocument data={{ marks: { courses: []}}} />
      </PDFViewer> */}
	    <RegistrationForm/>
    </div>
  )
}

export default App;
