import Deer from '../../assets/images/icon-deer.svg';
import Fox from '../../assets/images/icon-fox.svg';
export const UserList = () => {
    return (
        <div>
            <div className="mx-4 mb-4">
                <div className="row users">
                    <div className="tit-filter-users mb-2">
                        <p>Usuarios activos</p>
                    </div>
                    <div className="col-sm-12 col-md-1 col-lg-1 col-12"></div>
                    <div className="col-sm-3 col-md-2 col-lg-2 col-3 mb-4">
                        <div className="icon-user-add">
                            <img
                                src={Fox}
                                alt="Fox-icon"
                                className="icon-user-active"
                            />
                        </div>
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9 col-9 mb-4">
                        <div className="user-info-admin row">
                            <div className="col-sm-11 col-md-6 col-lg-6 col-11">
                                <p className="name-user">Usuario: Chuy</p>
                                <p className="position-user">
                                    Posición: Jefe cuadrilla
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                                <div className="text-end">
                                    <button className="btn btn-primary btn-edit-admin">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className="btn btn-primary btn-edit-admin">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-1 col-lg-1 col-12"></div>
                    <div className="col-sm-3 col-md-2 col-lg-2 col-3 mb-4">
                        <div className="icon-user-add">
                            <img
                                src={Deer}
                                alt="Fox-icon"
                                className="icon-user-active"
                            />
                        </div>
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9 col-9 mb-4">
                        <div className="user-info-admin row">
                            <div className="col-sm-11 col-md-6 col-lg-6 col-11">
                                <p className="name-user">Usuario: Chuy</p>
                                <p className="position-user">
                                    Posición: Jefe cuadrilla
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                                <div className="text-end">
                                    <button className="btn btn-primary btn-edit-admin">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className="btn btn-primary btn-edit-admin">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-4 mb-4">
                <div className="row users">
                    <div className="tit-filter-users mb-2">
                        <p>Proveedores activos</p>
                    </div>
                    <div className="col-sm-12 col-md-1 col-lg-1 col-12"></div>
                    <div className="col-sm-3 col-md-2 col-lg-2 col-3 mb-4">
                        <div className="icon-user-add">
                            <img
                                src={Fox}
                                alt="Fox-icon"
                                className="icon-user-active"
                            />
                        </div>
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9 col-9 mb-4">
                        <div className="user-info-admin row">
                            <div className="col-sm-11 col-md-6 col-lg-6 col-11">
                                <p className="name-user">Proveedor: Chuy</p>
                                <p className="position-user">Material: Tela</p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                                <div className="text-end">
                                    <button className="btn btn-primary btn-edit-admin">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className="btn btn-primary btn-edit-admin">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-1 col-lg-1 col-12"></div>
                    <div className="col-sm-3 col-md-2 col-lg-2 col-3 mb-4">
                        <div className="icon-user-add">
                            <img
                                src={Deer}
                                alt="Fox-icon"
                                className="icon-user-active"
                            />
                        </div>
                    </div>
                    <div className="col-sm-9 col-md-9 col-lg-9 col-9 mb-4">
                        <div className="user-info-admin row">
                            <div className="col-sm-11 col-md-6 col-lg-6 col-11">
                                <p className="name-user">Proveedor: Chuy</p>
                                <p className="position-user">
                                    Material: Motores
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-6 col-12">
                                <div className="text-end">
                                    <button className="btn btn-primary btn-edit-admin">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                    <button className="btn btn-primary btn-edit-admin">
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
