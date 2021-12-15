import Button from './Button';

const Header = ({ title }) => {
   return (
      <header className="header">
         <h1>{title}</h1>
         <Button color="green" text="hello1" />
      </header>
   )
}

// CSS in JS
// const headingStyle = {
//    color: 'red',
//    backgroundColor: 'black'
// }

Header.defaultProps = {
   title: 'Task Tracker'
}

export default Header
