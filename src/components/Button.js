import PropTypes from 'prop-types';

const Button = ({ color, text }) => {
   const onClick = () => {
      console.log('click')
   }
   return (
      <button onClick={onClick} className="btn" style={{ backgroundColor: color }}>{text}</button>
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