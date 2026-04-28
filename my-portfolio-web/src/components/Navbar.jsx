export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo">Silvia de Abia</a>
        <ul>
          <li><b><a href="#home">Home</a></b></li>
          <li><b><a href="#about">About me</a></b></li>
          <li><b><a href="#projects">Projects</a></b></li>
          <li><b><a href="#contact">Contact</a></b></li>
        </ul>
      </div>
    </nav>
  );
}