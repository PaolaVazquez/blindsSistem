export const QuotedGenerator = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="add-title-admin mx-5 mb-5">
                    <h3>Cotizador de persianas</h3>
                </div>
                <div className="add-supplier mx-5">
                    <form className="row g-3 needs-validation mx-5" noValidate>
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
                            <div className="valid-feedback">!Válido!</div>
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
                            <div className="valid-feedback">!Válido!</div>
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
                                <option value="sheer">Sheer Elegance</option>
                                <option value="enrollable">Enrollable</option>
                            </select>
                            <div className="invalid-feedback">
                                Selecciona una opción
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                            <label className="form-label">Tela</label>
                            <select
                                className="form-select"
                                id="validationCustom04"
                                required
                            >
                                <option selected disabled value="">
                                    Selecciona
                                </option>
                                <option value="sheer">Sheer Elegance</option>
                                <option value="enrollable">Enrollable</option>
                            </select>
                            <div className="invalid-feedback">
                                Selecciona una opción
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                            <label className="form-label">Color</label>
                            <select
                                className="form-select"
                                id="validationCustom04"
                                required
                            >
                                <option selected disabled value="">
                                    Selecciona
                                </option>
                                <option value="sheer">Sheer Elegance</option>
                                <option value="enrollable">Enrollable</option>
                            </select>
                            <div className="invalid-feedback">
                                Selecciona una opción
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                            <label className="form-label">Filtro</label>
                            <select
                                className="form-select"
                                id="validationCustom04"
                                required
                            >
                                <option selected disabled value="">
                                    Selecciona
                                </option>
                                <option value="sheer">Sheer Elegance</option>
                                <option value="enrollable">Enrollable</option>
                            </select>
                            <div className="invalid-feedback">
                                Selecciona una opción
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 col-12 mb-4">
                            <label className="form-label">
                                Ancho (cm) <i className="fa-solid fa-ruler"></i>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationCustom03"
                                required
                            />
                            <div className="valid-feedback">¡Válido!</div>
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
                            <div className="valid-feedback">¡Válido!</div>
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

                        <div className="col-sm-12 col-md-12 col-lg-12 col-12 text-center">
                            <button
                                className="btn btn-primary btn-save-user me-3"
                                type="submit"
                            >
                                Calcular{' '}
                                <i className="fa-solid fa-calculator"></i>
                            </button>
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
