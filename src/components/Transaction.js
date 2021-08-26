import Item from "./Item";
import './Transaction.css'

const Transaction = (props) => {
    const {items} = props
    return (
      <ul className = "item-list">
        {items.map((element) => {
          //return <Item title={element.title} amount={element.amount}/>
          return <Item {...element} key = {element.id}/>
        })}
      </ul>
    );
}

export default Transaction