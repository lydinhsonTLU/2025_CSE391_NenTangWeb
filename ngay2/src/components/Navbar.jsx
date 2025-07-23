const Navbar = () => {
    return (
        <>
            <div className="header" style={{ backgroundColor: "#435d7d", color: "white" }}>
                <nav className="navbar navbar-expand" aria-label="Second navbar example">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#" style={{ paddingLeft: "12px" }}> <b>TLU</b> </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample02" style={{ justifyContent: "space-between" }}>
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="#"> Trang chủ </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active text-white" href="#"> Quản lý nhân viên </a>
                                </li>
                            </ul>

                            <form role="search" style={{ display: "flex" }}>
                                <input className="form-control" type="search" placeholder="Nhập nội dung tìm kiếm" aria-label="Search"/>

                                <button className="btn btn-success" style={{ marginLeft: "5px", border: "1px solid white" }}>Tìm</button>
                            </form>   
                        </div>
                    </div>
                </nav>
             </div>
        </>
    );
}

export default Navbar;