export const AddMaterial = () => {
    return (
        <div
            className="modal fade"
            id="AddMaterial"
            tabIndex={-1}
            aria-labelledby="AddMaterialLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="add-title-admin mx-5">
                            <h3>Agregar Material</h3>
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
                                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                            <label className="form-label">
                                                Nombre del material
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
                                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                            <label className="form-label">
                                                Tipo de Material
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
                                                <option value="tela">
                                                    Tela
                                                </option>
                                                <option value="material">
                                                    Material
                                                </option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Selecciona una opción
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                            <label className="form-label">
                                                Material
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom03"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                ¡Material válido!
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                            <label className="form-label">
                                                Precio público
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom03"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                ¡Material válido!
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                            <label className="form-label">
                                                Precio distribuidor
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom03"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                ¡Material válido!
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                            <label className="form-label">
                                                Tipo de Tela
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
                                                <option value="sheer">
                                                    Sheer Elegance
                                                </option>
                                                <option value="enrollable">
                                                    Enrollable
                                                </option>
                                                <option value="panel">
                                                    Panel Japónes
                                                </option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Selecciona una opción
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                            <label className="form-label">
                                                Filtro de Tela
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
                                                <option value="traslucida">
                                                    Tráslucida
                                                </option>
                                                <option value="semi">
                                                    Semi-Tráslucida
                                                </option>
                                                <option value="blackout">
                                                    Blackout
                                                </option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Selecciona una opción
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                            <label className="form-label">
                                                Color de la Tela
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom03"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                ¡Color válido!
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                            <label className="form-label">
                                                Ancho de la Tela (cm)
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom03"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                ¡Ancho válido!
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                            <label className="form-label">
                                                Alto de la Tela (cm)
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom03"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                ¡Alto válido!
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                            <label className="form-label">
                                                Cantidad
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom03"
                                                placeholder="Ej. 3 metros, 1 caja, 100 piezas"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                ¡Cantidad válido!
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                            <label className="form-label">
                                                Proveedor
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
                                                <option value="traslucida">
                                                    Tráslucida
                                                </option>
                                                <option value="semi">
                                                    Semi-Tráslucida
                                                </option>
                                                <option value="blackout">
                                                    Blackout
                                                </option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Selecciona una opción
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                                            <label className="form-label">
                                                Ubicación
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustom03"
                                                required
                                            />
                                            <div className="valid-feedback">
                                                ¡Material válido!
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
