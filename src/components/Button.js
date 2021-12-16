import PropTypes from 'prop-types';

const Button = ({ color, text, onAddTask, showAddTask }) => {
   return (
      <button onClick={() => onAddTask()} className="btn" style={{ backgroundColor: showAddTask ? 'red' : color }}>{showAddTask ? 'Close' : text}</button>
   )
}

Button.defaultProps = {
   color: 'steelblue'
}

Button.propTypes = {
   text: PropTypes.string,
   color: PropTypes.string
}

export default Button;