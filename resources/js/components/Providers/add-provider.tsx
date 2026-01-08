export const AddProvider = () => {
    return (
        <div
            className="modal fade"
            id="AddProvider"
            tabIndex={-1}
            aria-labelledby="AddProviderLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="add-title-admin mx-5">
                            <h3>Agregar Proveedor</h3>
                        </div>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="container py-5">
                            <div className="row mx-3">
                                <div className="add-supplier">
                                    <form
                                        className="row g-3 needs-validation mx-5"
                                        noValidate
                                    >
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-4">
                                            <label className="form-label">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom01"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                !Nombre válido!
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 md-4 col-12">
                                            <label className="form-label">
                                                Apellido
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom02"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                !Apellido válido!
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 md-4 col-12">
                                            <label className="form-label">
                                                Correo electrónico
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="validationCustom02"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                !Correo válido!
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-4">
                                            <label className="form-label">
                                                Domicilio
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom03"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                ¡Domicilio válido!
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-4">
                                            <label className="form-label">
                                                Teléfono de contacto
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom03"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                ¡Teléfono válido!
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-4">
                                            <label className="form-label">
                                                Alias
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom03"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                ¡Domicilio válido!
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-4">
                                            <label className="form-label">
                                                Ciudad
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom03"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                ¡Domicilio válido!
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col-12 mb-4">
                                            <label className="form-label">
                                                Estado
                                            </label>
                                            <select
                                                className="form-select"
                                                id="validationCustom04"
                                                required
                                            >
                                                <option
                                                    selected
                                                    disabled
                                                    value=""
                                                >
                                                    Selecciona
                                                </option>
                                                <option>...</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Selecciona una opción
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-3 col-lg-3 col-12 mb-4">
                                            <label className="form-label">
                                                Material
                                            </label>
                                            <select
                                                className="form-select"
                                                id="validationCustom04"
                                                required
                                            >
                                                <option
                                                    selected
                                                    disabled
                                                    value=""
                                                >
                                                    Selecciona
                                                </option>
                                                <option>...</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Selecciona una opción
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="btn btn-primary btn-save-user"
                            type="submit"
                        >
                            Guardar
                            <i className="fa-solid fa-floppy-disk ms-2"></i>
                        </button>
                        <button
                            className="btn btn-primary btn-save-user ms-3"
                            type="submit"
                        >
                            Editar
                            <i className="fa-solid fa-pen-to-square ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
