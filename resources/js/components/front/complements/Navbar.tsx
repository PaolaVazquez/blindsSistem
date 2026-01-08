//import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <header className="pt-3">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    {/*<Link to="/" className="navbar-brand">
                        <img
                            src={LogoNegro}
                            alt="Logo de aluze de color negro"
                            className="logo-menu"
                        />
                    </Link>*/}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="navbar-collapse collapse"
                        id="navbarSupportedContent"
                    >
                        {/*<ul className="navbar-nav mb-lg-0 mx-auto mb-2">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    <i className="fa-solid fa-house icon-menu-1"></i>
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Telas" className="nav-link">
                                    <i className="fa-solid fa-feather icon-menu-1"></i>
                                    Telas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Pedidos" className="nav-link">
                                    <i className="fa-solid fa-folder icon-menu-1"></i>
                                    Pedidos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Cotizador" className="nav-link">
                                    <i className="fa-solid fa-calculator icon-menu-1"></i>
                                    Ventas
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Cotizaciones" className="nav-link">
                                    <i className="fa-solid fa-box-archive icon-menu-1"></i>
                                    Cotizaciones
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <i className="fa-solid fa-circle-info icon-menu-1"></i>
                                    Ayuda
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <Link to="/PerfilUsusario">
                                <div className="profile-menu">
                                    <img
                                        src={Cow}
                                        alt=""
                                        className="profile-icon-menu"
                                    />
                                </div>
                            </Link>
                        </form>*/}
                    </div>
                </div>
            </nav>
        </header>
    );
};
