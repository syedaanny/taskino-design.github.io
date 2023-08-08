
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container px-md-5 px-6 px-lg-4 px-sm-5 px-xxl-5" width="100">
    <a className="navbar-brand" href="#">
        <Image className='brand-img' src="/img/logo.png" width="77" height="77" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse  left-menu align-middle " id="navbarNav">
      <ul className=" navbar-nav navbar-menu-list  m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Overview</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Testimonials</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    
      <ul className="nav navbar-nav navbar-right">
      <li><button type="button" className="btn  btn-lg login-btn">
      <a href="#"> Login </a></button></li>
      <li><button type="button" className="btn signup-btn btn-lg rounded">
      <a href="#"> Sign up </a></button></li>
    </ul>
    
    </div>
  </div>
</nav>



  );
};
export default Navbar;