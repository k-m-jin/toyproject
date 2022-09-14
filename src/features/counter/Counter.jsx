import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className="bg-[#999] flex flex-col justify-center items-center gap-2">
      <p>{count}</p>
      <div>
        <button
          class="w-24 bg-sky-500 drop-shadow-md hover:drop-shadow-xl"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          class="w-24 bg-sky-500 drop-shadow-md hover:drop-shadow-xl"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>

      <input
        className="w-24"
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />

      <div>
        <button
          class="w-24 bg-sky-500 drop-shadow-md hover:drop-shadow-xl"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
        <button
          class="w-24 bg-sky-500 drop-shadow-md hover:drop-shadow-xl"
          onClick={resetAll}
        >
          Reset
        </button>
      </div>
    </section>
  );
};
export default Counter;
