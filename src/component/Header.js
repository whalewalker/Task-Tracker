import Button from "./Button";
const Header = ({onAdd, showAdd}) => {

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button text={showAdd ? "Close" : "Add" } color={showAdd ? 'rgb(170, 38, 45)' : 'green'} onClick={onAdd} />
    </header>
  );
};

export default Header;
