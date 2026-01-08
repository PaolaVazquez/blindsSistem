import { ModalQuoted } from '../Quoted/new-quoted';

export const OrderList = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="add-title-admin mx-2 mb-5">
                    <h3>Pedidos de persianas</h3>
                </div>
                <div className="text-end">
                    <button
                        className="btn btn-primary btn-new-quote"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#AddOrder"
                    >
                        Agregar Pedido <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="row">
                    <div className="mx-2">
                        <div className="daily-task">
                            <div className="table-responsive-md">
                                <table className="table-md table">
                                    <thead>
                                        <tr>
                                            <th scope="col">N° Pedido</th>
                                            <th scope="col">Tienda</th>
                                            <th scope="col">Encargado</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Comentarios</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Moda Spacio</td>
                                            <td>Chuy</td>
                                            <td>Entregado</td>
                                            <td>Falta tela</td>
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
                                            <td></td>
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
                                            <td></td>
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
            <ModalQuoted />
        </div>
    );
};
