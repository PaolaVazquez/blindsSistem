import { ModalQuoted } from './new-quoted';

export const SavedQuotes = () => {
    return (
        <div className="container py-5">
            <ModalQuoted />

            <div className="row">
                <div className="col-sm-12 col-md-1 col-lg-1 col-12"></div>
                <div className="col-sm-12 col-md-10 col-lg-10 col-12">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                            <div className="mb-4">
                                <h2>Mis Cotizaciones</h2>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                            <div className="text-end">
                                <button
                                    className="btn btn-primary btn-new-quote"
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#AddOrder"
                                >
                                    Nueva Cotización{' '}
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="search-quotes mb-5">
                        <i className="fa-solid fa-magnifying-glass icon-search-quotes">
                            {' '}
                        </i>
                        <input
                            type="text"
                            className="form-control input-search-quote"
                            placeholder="Buscar cotización"
                        />
                    </div>
                    <ul
                        className="nav nav-underline mb-3"
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
                                Todas <i className="fa-solid fa-folder"></i>
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
                                Guardadas{' '}
                                <i className="fa-solid fa-bookmark"></i>
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="pills-contact-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-contact"
                                type="button"
                                role="tab"
                                aria-controls="pills-contact"
                                aria-selected="false"
                            >
                                Vendidas <i className="fa-solid fa-tag"></i>
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
                            <div className="container py-5">
                                <div className="row">
                                    <div className="table-responsive-sm border-tables mt-3">
                                        <table className="table-sm table-borderless align-items-center table text-center">
                                            <thead>
                                                <tr>
                                                    <th scope="col">
                                                        ID Cotización
                                                    </th>
                                                    <th scope="col">Cliente</th>
                                                    <th scope="col">Fecha</th>
                                                    <th scope="col">Total</th>
                                                    <th>Status</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                                <tr>
                                                    <td>#1001</td>
                                                    <td>Emily Carter</td>
                                                    <td>05/15/2024</td>
                                                    <td>$1,250.00</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-primary btn-status-quote"
                                                            disabled
                                                            aria-label="Close"
                                                        >
                                                            Vendida
                                                        </button>
                                                    </td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">Motor</td>
                                                    <td>Motor Alexa</td>
                                                    <td>3 piezas</td>
                                                    <td>
                                                        <button className="btn btn-primary btn-order-edit">
                                                            <i className="fa-solid fa-pen-to-square"></i>
                                                        </button>
                                                        <button className="btn btn-primary btn-convert-order ms-4">
                                                            Pasar a pedido{' '}
                                                            <i className="fa-solid fa-check ms-2"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td scope="row">3</td>
                                                    <td>Teko</td>
                                                    <td>Doe</td>
                                                    <td>
                                                        <button className="btn btn-primary btn-order-edit">
                                                            <i className="fa-solid fa-pen-to-square"></i>
                                                        </button>
                                                        <button className="btn btn-primary btn-convert-order ms-4">
                                                            Pasar a pedido{' '}
                                                            <i className="fa-solid fa-check ms-2"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-profile"
                            role="tabpanel"
                            aria-labelledby="pills-profile-tab"
                            tabIndex={0}
                        >
                            dddd
                        </div>
                        <div
                            className="tab-pane fade"
                            id="pills-contact"
                            role="tabpanel"
                            aria-labelledby="pills-contact-tab"
                            tabIndex={0}
                        >
                            eee
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-1 col-lg-1 col-12"></div>
            </div>
        </div>
    );
};
