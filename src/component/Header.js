import Button from "./Button";
const Header = () => {
  const onClickHandler = () =>{
    console.log("Clicked")
  }

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button text="Add" color="green" onClick={onClickHandler} />
    </header>
  );
};

export default Header;
