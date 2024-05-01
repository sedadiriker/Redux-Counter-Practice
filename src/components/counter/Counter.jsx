import { useDispatch, useSelector } from "react-redux"
import "./Counter.css"
import { arttırma,azaltma, silme } from "../../store/counterReducer"
const Counter = () => {

  const count = useSelector((state) => state.count)
  // console.log(count)
  const dispatch = useDispatch()
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button onClick={()=> dispatch(arttırma())} className="counter-button positive">increase</button>
        <button onClick={()=>dispatch(silme())} className="counter-button zero">reset</button>
        <button onClick={()=>dispatch(azaltma())} className="counter-button negative">decrease</button>
      </div>
    </div>
  )
}

export default Counter
