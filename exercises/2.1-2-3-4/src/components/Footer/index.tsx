import "./Footer.css"

interface FooterProps{
    img_url : string;
    children : React.ReactNode;
}

const Footer = (props : FooterProps) => {
    return(
        <footer>
            <img className="footerImage" src={props.img_url} alt="image" />
            {props.children}
        </footer>
    )
}

export default Footer;

