export const Factory = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="orders-factory">
                    <p className="d-inline-flex gap-1">
                        <button
                            className="btn btn-primary btn-order-factory"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#pedidoCarlos"
                            aria-expanded="false"
                            aria-controls="pedidoCarlos"
                        >
                            <i
                                data-feather="info"
                                className="information-icon-order"
                            ></i>
                            Pedido N°12: Carlos Gónzalez
                        </button>
                    </p>
                    <div className="collapse" id="pedidoCarlos">
                        <div className="card text-start">
                            <div className="card-header text-center">
                                <p className="tit-order-factory">
                                    Carlos Gónzalez
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-3 col-lg-3 col-12 mb-4">
                                            <div className="">
                                                <p className="number-blind-order-factory">
                                                    Persiana N°1
                                                </p>
                                                <p className="details-blind">
                                                    Tipo de persiana:{' '}
                                                    <span>Enrollable</span>
                                                </p>
                                                <p className="details-blind">
                                                    Alto: <span>2.40</span>
                                                </p>
                                                <p className="details-blind">
                                                    Ancho: <span>1.40</span>
                                                </p>
                                                <p className="details-blind">
                                                    Tela:{' '}
                                                    <span>Blackout negra</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col-12 mb-4">
                                            <div className="">
                                                <p className="number-blind-order-factory">
                                                    Persiana N°1
                                                </p>
                                                <p className="details-blind">
                                                    Tipo de persiana:{' '}
                                                    <span>Enrollable</span>
                                                </p>
                                                <p className="details-blind">
                                                    Alto: <span>2.40</span>
                                                </p>
                                                <p className="details-blind">
                                                    Ancho: <span>1.40</span>
                                                </p>
                                                <p className="details-blind">
                                                    Tela:{' '}
                                                    <span>Blackout negra</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col-12 mb-4">
                                            <div className="">
                                                <p className="number-blind-order-factory">
                                                    Persiana N°1
                                                </p>
                                                <p className="details-blind">
                                                    Tipo de persiana:{' '}
                                                    <span>Enrollable</span>
                                                </p>
                                                <p className="details-blind">
                                                    Alto: <span>2.40</span>
                                                </p>
                                                <p className="details-blind">
                                                    Ancho: <span>1.40</span>
                                                </p>
                                                <p className="details-blind">
                                                    Tela:{' '}
                                                    <span>Blackout negra</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col-12 mb-4">
                                            <div className="">
                                                <p className="number-blind-order-factory">
                                                    Persiana N°1
                                                </p>
                                                <p className="details-blind">
                                                    Tipo de persiana:{' '}
                                                    <span>Enrollable</span>
                                                </p>
                                                <p className="details-blind">
                                                    Alto: <span>2.40</span>
                                                </p>
                                                <p className="details-blind">
                                                    Ancho: <span>1.40</span>
                                                </p>
                                                <p className="details-blind">
                                                    Tela:{' '}
                                                    <span>Blackout negra</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer text-body-secondary text-center">
                                Moda Spacio
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
