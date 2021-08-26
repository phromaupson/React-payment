import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import './App.css'
import { useState } from 'react';



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
    <div className = "container">
      <h1 style = {design}>แอพบัญชีรายรับ - รายจ่าย</h1>
      <FormComponent onAddItem = {onAddNewItem}/>
      <Transaction items = {items}/>
    </div>
  );
}

export default App;
