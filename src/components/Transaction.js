import Item from "./Item";
import './Transaction.css'

const Transaction = () => {
  const data = [
    {title: "ค่ารักษาพยาบาล",amount: "2000"},
    {title: "เงินเดือน",amount: "50000"},
    {title: "ค่าเดินทาง",amount: "500"}
  ]
    return (
      <ul className = "item-list">
        {data.map((element) => {
          return <Item title={element.title} amount={element.amount}/>
        })}
      </ul>
    );
}

export default Transaction