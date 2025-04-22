import Styles from "./Footer.module.css"

function Footer(){
    return(
    <footer>
      <p>&copy; {new Date().getFullYear()} Programação. Todos os direitos reservados.</p>
    </footer>
    );
}

export default Footer;