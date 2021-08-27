import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import './App.css'
import { useState } from 'react';
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";

function App() {
  const design = {color : "red", textAlign : "center", fontSize : '1.5rem'}
  // const initData = [
  //   {id: 1, title: "ค่ารักษาพยาบาล",amount: "2000"},
  //   {id: 2, title: "เงินเดือน",amount: "50000"},
  //   {id: 3, title: "ค่าเดินทาง",amount: "500"}
  // ]
  // const [items, setItems] = useState(initData)
  
  const [items, setItems] = useState([])
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem,...prevItem]
    })
  }
  return (
    <DataContext.Provider value={
      {
        income : 50000,
        expense : -8000
      }
    }>
      <div className = "container">
      <h1 style = {design}>แอพบัญชีรายรับ - รายจ่าย</h1>
      <ReportComponent/>
      <FormComponent onAddItem = {onAddNewItem}/>
      <Transaction items = {items}/>
    </div>
    </DataContext.Provider>
  );
}

export default App;
