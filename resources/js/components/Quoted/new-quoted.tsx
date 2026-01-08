export const ModalQuoted = () => {
    return (
        <div
            className="modal fade"
            id="AddOrder"
            tabIndex={-1}
            aria-labelledby="AddOrderLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="add-title-admin mx-5 mt-2">
                            <h3>Cotizador de persianas</h3>
                        </div>
                        <button
                            type="button"
                            className="btn-close btn-close-modals"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="me-5 text-end">
                            <button
                                className="btn btn-primary btn-new-quote"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#AddOrder"
                            >
                                Agregar Persiana{' '}
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <div className="row mx-4 py-5">
                            <div className="add-supplier">
                                <form
                                    className="row g-3 needs-validation mx-5"
                                    noValidate
                                >
                                    <div className="col-sm-12 col-md-4 col-lg-4 md-4 col-12">
                                        <label className="form-label">
                                            Fecha de la cotización
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="validationCustom02"
                                            required
                                        />
                                        <div className="valid-feedback">
                                            !Válido!
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                        <label className="form-label">
                                            Nombre del cliente
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom01"
                                            required
                                        />
                                        <div className="valid-feedback">
                                            !Válido!
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4 md-4 col-12">
                                        <label className="form-label">
                                            Tipo de persiana
                                        </label>
                                        <select
                                            className="form-select"
                                            id="validationCustom04"
                                            required
                                        >
                                            <option selected disabled value="">
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
                                            Selecciona una opción
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                        <label className="form-label">
                                            Tela
                                        </label>
                                        <select
                                            className="form-select"
                                            id="validationCustom04"
                                            required
                                        >
                                            <option selected disabled value="">
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
                                            Selecciona una opción
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                        <label className="form-label">
                                            Color
                                        </label>
                                        <select
                                            className="form-select"
                                            id="validationCustom04"
                                            required
                                        >
                                            <option selected disabled value="">
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
                                            Selecciona una opción
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                        <label className="form-label">
                                            Filtro
                                        </label>
                                        <select
                                            className="form-select"
                                            id="validationCustom04"
                                            required
                                        >
                                            <option selected disabled value="">
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
                                            Selecciona una opción
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                        <label className="form-label">
                                            Ancho (cm){' '}
                                            <i className="fa-solid fa-ruler"></i>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom03"
                                            required
                                        />
                                        <div className="valid-feedback">
                                            ¡Válido!
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                        <label className="form-label">
                                            Alto (cm){' '}
                                            <i className="fa-solid fa-ruler-vertical"></i>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom03"
                                            required
                                        />
                                        <div className="valid-feedback">
                                            ¡Válido!
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                        <div className="instalation-check form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                id="exampleCheck1"
                                            />
                                            <label className="form-check-label">
                                                No necesita instalación
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-12 col-lg-12 col-12 text-center"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-primary btn-save-user me-3"
                            type="submit"
                        >
                            Calcular{' '}
                            <i className="fa-solid fa-calculator ms-2"></i>
                        </button>
                        <button
                            className="btn btn-primary btn-save-user me-3"
                            type="submit"
                        >
                            Guardar{' '}
                            <i className="fa-solid fa-floppy-disk ms-2"></i>
                        </button>
                        <button
                            className="btn btn-primary btn-save-user"
                            type="submit"
                        >
                            Levantar pedido{' '}
                            <i className="fa-solid fa-check ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
