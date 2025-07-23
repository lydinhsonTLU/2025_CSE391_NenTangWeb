const Sidebar = () => {
    return (
    <>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-primary text-white" style={{ width: '280px', background: "#435d7d" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-white">
            <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true">
                <use xlinkHref="#bootstrap" />
            </svg>        
            <span className="fs-4">ADMIN AREA</span>
        </a>

        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
            <a href="#" className="nav-link link-body-emphasis text-white " aria-current="page">
                <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#home" />
                </svg>
                Home
            </a>
            </li>

            <li>
            <a href="#" className="nav-link link-body-emphasis text-white">
                <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#speedometer2" />
                </svg>
                Dashboard
            </a>
            </li>

            <li>
            <a href="#" className="nav-link link-body-emphasis text-white">
                <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#table" />
                </svg>
                Orders
            </a>
            </li>

            <li>
            <a href="#" className="nav-link link-body-emphasis text-white">
                <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#grid" />
                </svg>
                Products
            </a>
            </li>

            <li>
            <a href="#" className="nav-link link-body-emphasis text-white">
                <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                    <use xlinkHref="#people-circle" />
                </svg>
                Customers
            </a>
            </li>
        </ul>
    </div>
    </>
    );
}

export default Sidebar;