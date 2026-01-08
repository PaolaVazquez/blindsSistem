import { AddProvider } from './add-provider';

export const Providers = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="add-title-admin mx-3 mb-5">
                    <h3>Usuarios</h3>
                </div>
                <div className="text-end">
                    <button
                        className="btn btn-primary btn-new-quote"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#AddProvider"
                    >
                        Agregar Proveedor <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="mx-3">
                    <div className="daily-task">
                        <div className="table-responsive-md">
                            <table className="table-md table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID Proveedor</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Teléfono contacto</th>
                                        <th scope="col">Material</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Moda Spacio</td>
                                        <td>Chuy</td>
                                        <td>Entregado</td>
                                        <td>
                                            <button className="btn btn-primary btn-order-edit">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                            <button className="btn btn-primary btn-edit-admin">
                                                <i className="fa-solid fa-trash"></i>
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
                                            <button className="btn btn-primary btn-edit-admin">
                                                <i className="fa-solid fa-trash"></i>
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
                                            <button className="btn btn-primary btn-edit-admin">
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <AddProvider />
        </div>
    );
};
