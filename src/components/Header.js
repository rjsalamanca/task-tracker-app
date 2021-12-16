import Button from './Button';

const Header = ({ title, onAddTask, showAddTask }) => {
   return (
      <header className="header">
         <h1>{title}</h1>
         <Button onAddTask={onAddTask} showAddTask={showAddTask} color='green' text='Add' />
      </header>
   )
}

Header.defaultProps = {
   title: 'Task Tracker'
}

export default Header
