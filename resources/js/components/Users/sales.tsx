export const Sales = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="mb-4">
                    <h2>Mis cotizaciones</h2>
                </div>
                <div className="">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="home-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#home-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="home-tab-pane"
                                aria-selected="true"
                            >
                                Home
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="profile-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#profile-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="profile-tab-pane"
                                aria-selected="false"
                            >
                                Profile
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="contact-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#contact-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="contact-tab-pane"
                                aria-selected="false"
                            >
                                Contact
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="disabled-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#disabled-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="disabled-tab-pane"
                                aria-selected="false"
                                disabled
                            >
                                Disabled
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div
                            className="tab-pane fade show active"
                            id="home-tab-pane"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                            tabIndex={0}
                        >
                            ...
                        </div>
                        <div
                            className="tab-pane fade"
                            id="profile-tab-pane"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                            tabIndex={0}
                        >
                            ...
                        </div>
                        <div
                            className="tab-pane fade"
                            id="contact-tab-pane"
                            role="tabpanel"
                            aria-labelledby="contact-tab"
                            tabIndex={0}
                        >
                            ...
                        </div>
                        <div
                            className="tab-pane fade"
                            id="disabled-tab-pane"
                            role="tabpanel"
                            aria-labelledby="disabled-tab"
                            tabIndex={0}
                        >
                            ...
                        </div>
                    </div>
                </div>
                <div className="table-responsive-sm">
                    <table className="table-sm table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">
                                    N° Pedido
                                </th>
                                <th scope="col">Material</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            <tr>
                                <th scope="row" className="text-center">
                                    1
                                </th>
                                <td>Moda Spacio</td>
                                <td>Otto</td>
                                <td>10 metros</td>
                                <td>Entregado</td>
                                <td>
                                    <button className="btn btn-primary btn-order-edit">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className="btn btn-primary btn-order-edit">
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center">
                                    2
                                </th>
                                <td>Casanka</td>
                                <td>Thornton</td>
                                <td>3 motores</td>
                                <td>Producción</td>
                                <td>
                                    <button className="btn btn-primary btn-order-edit">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className="btn btn-primary btn-order-edit">
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center">
                                    3
                                </th>
                                <td>Teko</td>
                                <td>Doe</td>
                                <td>1 control</td>
                                <td>Entregado</td>
                                <td>
                                    <button className="btn btn-primary btn-order-edit">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className="btn btn-primary btn-order-edit">
                                        <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
