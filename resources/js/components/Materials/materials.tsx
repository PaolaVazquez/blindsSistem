import { AddMaterial } from './add-material';

export const InventaryMaterial = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <h2>Inventario</h2>
                <div className="text-end">
                    <button
                        className="btn btn-primary btn-new-quote"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#AddMaterial"
                    >
                        Agregar Material <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
                <div className="table-responsive-md border-tables mt-3">
                    <table className="table-borderless align-items-center table-responsive-md table text-center">
                        <thead>
                            <tr>
                                <th scope="col">Material</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Ubicación</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <th scope="row">Tela</th>
                                <td>Ottawa Blackout</td>
                                <td>4 metros</td>
                                <td>Oblatos</td>
                                <td>
                                    <button className="btn btn-primary btn-order-edit">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className="btn btn-primary btn-order-delete">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Motor</th>
                                <td>Motor Alexa</td>
                                <td>3 piezas</td>
                                <td>Santa Tere</td>
                                <td>
                                    <button className="btn btn-primary btn-order-edit">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className="btn btn-primary btn-order-delete">
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
                                    <button className="btn btn-primary btn-order-delete">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <AddMaterial />
        </div>
    );
};
