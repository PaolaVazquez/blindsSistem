import { OrderFabric } from './order-fabric';

export const ListFabric = () => {
    return (
        <div className="container">
            <div className="row">
                <ul
                    className="nav nav-underline nav-justified mb-3"
                    id="pills-tab"
                    role="tablist"
                >
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link active"
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >
                            Pedido de tela{' '}
                            <i className="fa-solid fa-feather ms-2"></i>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                        >
                            Calcular pedido de persianas
                            <i className="fa-solid fa-house-chimney-window ms-2"></i>
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabIndex={0}
                    >
                        {/* Inventary */}
                        <div className="container py-5">
                            <div className="row">
                                <div className="add-title-admin mx-2 mb-3">
                                    <h3>Inventario de Telas / Componentes</h3>
                                </div>
                                <div className="mx-3">
                                    <div className="daily-task">
                                        <div className="table-responsive-md">
                                            <table className="table-md table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            Tela / Componente
                                                        </th>
                                                        <th scope="col">
                                                            Cantidad
                                                        </th>
                                                        <th scope="col">
                                                            Ubicación
                                                        </th>
                                                        <th scope="col">
                                                            N° Pedido
                                                        </th>
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
                                                                <i className="fa-solid fa-check"></i>
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
                                                                <i className="fa-solid fa-check"></i>
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
                                                                <i className="fa-solid fa-check"></i>
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
                        {/* Fabric's Orders */}
                        <div className="container py-5">
                            <div className="row">
                                <div className="add-title-admin mx-2 mb-3">
                                    <h3>Pedidos de Telas / Componentes</h3>
                                </div>
                                <div className="text-end">
                                    <button
                                        className="btn btn-primary btn-new-quote"
                                        type="button"
                                        data-bs-toggle="modal"
                                        data-bs-target="#OrderFabric"
                                    >
                                        Pedir tela/componente{' '}
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                <div className="mx-3">
                                    <div className="daily-task">
                                        <div className="table-responsive-md">
                                            <table className="table-md table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            Tela / Componente
                                                        </th>
                                                        <th scope="col">
                                                            Cantidad
                                                        </th>
                                                        <th scope="col">
                                                            Fecha del Pedido
                                                        </th>
                                                        <th scope="col">
                                                            N° Pedido
                                                        </th>
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
                                                                <i className="fa-solid fa-check"></i>
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
                                                                <i className="fa-solid fa-check"></i>
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
                                                                <i className="fa-solid fa-check"></i>
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
                        <OrderFabric />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabIndex={0}
                    >
                        <div className="row">
                            <div className="container py-4">
                                <div className="row py-5">
                                    <div className="col-sm-12 col-md-12 col-lg-12 my3 col-12">
                                        <div className="py-3 text-end">
                                            <button className="btn btn-primary btn-agregar">
                                                <i className="fa-solid fa-plus me-2"></i>
                                                Agregar
                                            </button>
                                        </div>
                                        <div id="formularios-container">
                                            <div className="row g-3 needs-validation justify-content-center formulario-item">
                                                <div className="col-md-3 py-3">
                                                    <label className="form-label">
                                                        Ancho de la persiana (m)
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        id="ancho"
                                                        step="any"
                                                        min="0"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Por favor introduce el
                                                        ancho en metros
                                                    </div>
                                                </div>
                                                <div className="col-md-3 py-3">
                                                    <label className="form-label">
                                                        Alto de la persiana (m)
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        type="number"
                                                        id="alto"
                                                        step="any"
                                                        min="0"
                                                        required
                                                    />
                                                    <div className="invalid-feedback">
                                                        Por favor introduce el
                                                        alto en metros
                                                    </div>
                                                </div>
                                                <div className="col-md-2 py-3">
                                                    <label className="form-label">
                                                        Tipo de persiana
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="tipo"
                                                        required
                                                    >
                                                        <option
                                                            selected
                                                            disabled
                                                            value=""
                                                        >
                                                            Selecciona
                                                        </option>
                                                        <option value="sheer">
                                                            Sheer Elegance
                                                        </option>
                                                        <option value="enrollable">
                                                            Enrollable
                                                        </option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Por favor selecciona un
                                                        tipo de persiana
                                                    </div>
                                                </div>
                                                <div className="col-md-3 py-3">
                                                    <label className="form-label">
                                                        Ancho de la tela (m)
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="anchoTela"
                                                        required
                                                    >
                                                        <option
                                                            selected
                                                            disabled
                                                        >
                                                            Selecciona
                                                        </option>
                                                        <option value="2.5">
                                                            2.50 m
                                                        </option>
                                                        <option value="2.6">
                                                            2.60 m
                                                        </option>
                                                        <option value="2.8">
                                                            2.80 m
                                                        </option>
                                                        <option value="3">
                                                            3.00 m
                                                        </option>
                                                    </select>
                                                    <div className="invalid-feedback">
                                                        Por favor selecciona un
                                                        metraje
                                                    </div>
                                                </div>
                                                <div className="col-md-1 py-5">
                                                    <button className="btn btn-primary btn-delete">
                                                        <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Botones fuera del contenedor de formularios */}
                                        <div className="col-12 mt-3 text-end">
                                            <button className="btn btn-primary btn-calcular ms-2">
                                                <i className="fa-solid fa-magnifying-glass me-2"></i>
                                                Consultar
                                            </button>
                                            <button className="btn btn-secondary btn-limpiar ms-2 me-2">
                                                <i className="fa-solid fa-trash me-2"></i>{' '}
                                                Limpiar
                                            </button>
                                            <button className="btn btn-primary btn-save-order">
                                                <i className="fa-solid fa-floppy-disk me-2"></i>{' '}
                                                Guardar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12 my3 col-12">
                                        {/* Resultado */}
                                        <div className="resul">
                                            <h2>Resultados</h2>

                                            <div
                                                id="resultado"
                                                className="border-light-subtle div-resultados border py-3"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
