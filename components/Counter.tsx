import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../module/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="section">
      <div className="section-title">Counter Section</div>
      <span className="compteur">{count}</span>
      <div className="button-group">
        <button className="btn-primary" onClick={() => dispatch(increment())}>
          + Incrémenter
        </button>
        <button className="btn-primary" onClick={() => dispatch(decrement())}>
          - Décrémenter
        </button>
        <button
          className="btn-primary"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Incrémenter par 2
        </button>
      </div>
    </div>
  );
}
