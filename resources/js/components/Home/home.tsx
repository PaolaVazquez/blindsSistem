export const Home = () => {
    return (
        <div className="welcome-container container">
            <div className="row mb-5">
                <div className="text-center">
                    <h1 className="welcome-txt">Bienvenido</h1>
                </div>
                <div className="mx-5">
                    <h2 className="index-subtitle">Pedidos pendientes</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-1 col-lg-1 col-12"></div>
                <div className="col-sm-12 col-md-11 col-lg-11 col-12">
                    <div className="daily-task">
                        <div className="table-responsive-md">
                            <table className="table-md table">
                                <thead>
                                    <tr>
                                        <th scope="col">N° Pedido</th>
                                        <th scope="col">Tienda</th>
                                        <th scope="col">Encargado</th>
                                        <th scope="col">Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Moda Spacio</td>
                                        <td>Otto</td>
                                        <td>Entregado</td>
                                        <td>
                                            <button className="btn btn-primary btn-order-edit">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Casanka</td>
                                        <td>Thornton</td>
                                        <td>Producción</td>
                                        <td>
                                            <button className="btn btn-primary btn-order-edit">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Teko</td>
                                        <td>Doe</td>
                                        <td>Entregado</td>
                                        <td>
                                            <button className="btn btn-primary btn-order-edit">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
