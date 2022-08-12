import { connect } from 'react-redux';

import {
  decrement,
  increment,
} from '../../app/store/action/counterActions';

export function Counter(props: any) {
  console.log("value: " + props.value);
  const { value } = props;

  return (
    <div>
      <span>{ value }</span>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => (decrement())}
        >
          -
        </button>
        <button
          aria-label="Increment value"
          onClick={() => (increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    value: state.counter.value,
  }
}

export default connect(mapStateToProps)(Counter)