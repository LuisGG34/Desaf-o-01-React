

const Navbar = () => {
    const total = 25000;
    const formattedTotal = total.toLocaleString('es-ES');
    const token = false;

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pizzería Mamma Mia</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">{token ? "Profile" : "Login"}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">{token ? "Logout" : "Register"}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-disabled="true">Total: ${formattedTotal}</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;