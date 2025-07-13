import React, { useReducer } from 'react';

import TotalDisplay from './components/TotalDisplay.jsx';
import CalcButton from './components/CalcButton.jsx';
import reducer, { initialState } from './store/reducers.jsx';
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  result,
  typeToScreen,
  memoryAdd,
  memoryRecall,
  memoryClear,
} from './store/actions.jsx';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const eventNumberHandler = (event) => {
    dispatch(typeToScreen(event.target.value));
  };

  const eventOperationHandler = (event) => {
    dispatch(changeOperation(event.target.value));
  };

  const eventClearHandler = () => {
    dispatch(clearDisplay());
  };

  const eventResultHandler = () => {
    dispatch(result());
  };

  const eventMemoryAddHandler = () => {
    dispatch(memoryAdd());
  };

  const eventMemoryRecallHandler = () => {
    dispatch(memoryRecall());
  };

  const eventMemoryClearHandler = () => {
    dispatch(memoryClear());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>
            <div className="row">
              <CalcButton value={'M+'} onClick={eventMemoryAddHandler} />
              <CalcButton value={'MR'} onClick={eventMemoryRecallHandler} />
              <CalcButton value={'MC'} onClick={eventMemoryClearHandler} />
            </div>
            <div className="row">
              <CalcButton value={1} onClick={eventNumberHandler} />
              <CalcButton value={2} onClick={eventNumberHandler} />
              <CalcButton value={3} onClick={eventNumberHandler} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={eventNumberHandler} />
              <CalcButton value={5} onClick={eventNumberHandler} />
              <CalcButton value={6} onClick={eventNumberHandler} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={eventNumberHandler} />
              <CalcButton value={8} onClick={eventNumberHandler} />
              <CalcButton value={9} onClick={eventNumberHandler} />
            </div>
            <div className="row">
              <CalcButton value={'+'} onClick={eventOperationHandler} />
              <CalcButton value={0} onClick={eventNumberHandler} />
              <CalcButton value={'-'} onClick={eventOperationHandler} />
            </div>
            <div className="row">
              <CalcButton value={'*'} onClick={eventOperationHandler} />
              <CalcButton value={'/'} onClick={eventOperationHandler} />
              <CalcButton value={'CE'} onClick={eventClearHandler} />
            </div>

            <div className="row eq_button">
              <CalcButton value={'='} onClick={eventResultHandler} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
