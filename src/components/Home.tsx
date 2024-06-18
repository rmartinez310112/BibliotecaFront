import { Link } from "react-router-dom"
import "./Home.style.css"

const Home = () => {
  return (
    <>
<ul>
  <li style={{float:"left", color:"white", paddingTop:"15px", paddingLeft:"15px", }}>Biblioteca</li>
  
  <li><Link to="/loans" >Prestamos</Link></li>
  <li> <Link to="/" >Libros</Link></li>
</ul>
    {/* <article className="article-header">
        <header>
            <h1>Biblioteca</h1>
            <Link to="/" style={{textDecoration: 'none', color:'white', paddingRight:'100px'}} >Libros</Link>
          <Link to="/loans" style={{textDecoration: 'none', color:'white', paddingRight:'100px'}}>Prestamos</Link>
        </header>
    </article> */}
    </>
  )
}

export default Home
