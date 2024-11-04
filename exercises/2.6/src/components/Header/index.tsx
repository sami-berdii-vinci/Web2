import "./Header.css"

interface HeaderProps {
    title : string;
    img_url : string;
    children : React.ReactNode;
  }
  
  const Header = (props : HeaderProps) => {
    return (
      <header>
        <img className="headerImage" src={props.img_url} alt="image" />
        <h1>{props.title}</h1>
        <p>{props.children}</p>
      </header>
    )
  };

  export default Header;
