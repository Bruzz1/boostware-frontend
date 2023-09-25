import './CounterButton.css';
import {PropTypes} from 'prop-types';

export default function CounterButton({by, counterTrigger}) {

  // function incrementCounterFunction() {
  //   counterTrigger(by);
  // }

  return (
    <div className="Counter">
      <div>
        <button
          className="counterButton"
          onClick={() => counterTrigger(by)}>+{by}
        </button>
        <button
          className="counterButton"
          onClick={() => counterTrigger(-by)}>-{by}
        </button>
      </div>
    </div>
  );
}

CounterButton.propTypes = {
  by: PropTypes.number
}

CounterButton.defaultProps = {
  by: 1
}
