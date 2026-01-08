import Lion from '../../assets/images/icon-lion.svg';
export const AddUsers = () => {
    return (
        <div
            className="modal fade"
            id="AddUser"
            tabIndex={-1}
            aria-labelledby="AddUserLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="add-title-admin">
                            <h3>Agregar Usuario</h3>
                        </div>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="row mx-3">
                            <div className="add-supplier">
                                <form
                                    className="row g-3 needs-validation"
                                    noValidate
                                >
                                    <div className="col-sm-4 col-md-12 col-lg-12 col-4">
                                        <div className="profile-icon-add-user">
                                            <img
                                                src={Lion}
                                                alt="Lion icon"
                                                className="icon-add-user-profile"
                                            />
                                        </div>
                                        <button className="btn btn-primary btn-change-icon-user">
                                            <i className="fa-solid fa-pen-to-square me-2"></i>
                                            Cambiar
                                        </button>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-4">
                                        <label className="form-label">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            v-model="usuario.nombre"
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
                                            v-model="usuario.apellido"
                                            required
                                        />
                                        <div className="valid-feedback">
                                            !Apellido válido!
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-4">
                                        <label className="form-label">
                                            Domicilio
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            v-model="usuario.domicilio"
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
                                            v-model="usuario.telefono"
                                            required
                                        />
                                        <div className="valid-feedback">
                                            ¡Teléfono válido!
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 md-4 col-12">
                                        <label className="form-label">
                                            Usuario
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            v-model="usuario.usuario"
                                            required
                                        />
                                        <div className="valid-feedback">
                                            !Usuario válido!
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-4">
                                        <label className="form-label">
                                            Contraseña
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            v-model="usuario.password"
                                            required
                                        />
                                        <div className="valid-feedback">
                                            ¡Contraseña válido!
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-4">
                                        <label className="form-label">
                                            Alias
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            v-model="usuario.alias"
                                        />
                                    </div>

                                    <div className="col-sm-12 col-md-3 col-lg-3 col-12 mb-4">
                                        <label className="form-label">
                                            Posición
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            v-model="usuario.posicion"
                                            required
                                        />
                                        <div className="valid-feedback">
                                            ¡Posición válido!
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-3 col-lg-3 col-12 mb-4">
                                        <label className="form-label">
                                            Tipo de Usuario
                                        </label>
                                        <select
                                            className="form-select"
                                            v-model="usuario.tipo_usuario"
                                            required
                                        >
                                            <option selected disabled value="">
                                                Selecciona
                                            </option>
                                            <option value="admin">
                                                Administrador
                                            </option>
                                            <option value="fabrica">
                                                Fabrica
                                            </option>
                                            <option value="ventas">
                                                Ventas
                                            </option>
                                            <option value="compras">
                                                Compras
                                            </option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Selecciona una opción
                                        </div>
                                    </div>
                                </form>
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
