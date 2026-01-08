export const OrderMaterial = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="add-title-admin mx-5 mb-5">
                    <h3>Pedido de Tela</h3>
                </div>
                <div className="add-supplier mx-5">
                    <form className="row g-3 needs-validation mx-5" noValidate>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                            <label className="form-label">
                                Tela/Componente
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom01"
                                required
                            />
                            <div className="valid-feedback">!Válido!</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 md-4 col-12">
                            <label className="form-label">Cantidad</label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom02"
                                required
                            />
                            <div className="valid-feedback">!Válido!</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 md-4 col-12">
                            <label className="form-label">
                                Fecha del Pedido
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="validationCustom02"
                                required
                            />
                            <div className="valid-feedback">!Válido!</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                            <label className="form-label">
                                Fecha de Llegada
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                id="validationCustom03"
                                required
                            />
                            <div className="valid-feedback">¡Válido!</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                            <label className="form-label">Destino</label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                required
                            />
                            <div className="valid-feedback">¡Válido!</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                            <label className="form-label">Cliente</label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                required
                            />
                            <div className="valid-feedback">¡Válido!</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                            <label className="form-label">Proveedor</label>
                            <select
                                className="form-select"
                                id="validationCustom04"
                                required
                            >
                                <option selected disabled value="">
                                    Selecciona
                                </option>
                                <option>...</option>
                            </select>
                            <div className="invalid-feedback">
                                Selecciona una opción
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                            <label className="form-label">Quién recogió</label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                required
                            />
                            <div className="valid-feedback">¡Válido!</div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                            <label className="form-label">N° Pedido</label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                required
                            />
                            <div className="valid-feedback">¡Válido!</div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 col-12 text-center">
                            <button
                                className="btn btn-primary btn-save-user"
                                type="submit"
                            >
                                Guardar{' '}
                                <i className="fa-solid fa-floppy-disk"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
