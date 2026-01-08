import Cow from '../../assets/images/icon-cow.svg';
import { InventaryMaterial } from '../Materials/materials';
import { Providers } from '../Providers/providers';
import { EditUser } from './edit-user';
import { UserList } from './user-list';
import { Users } from './users';
export const Profile = () => {
    return (
        <div className="container py-5">
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
                            Perfil <i className="fa-solid fa-user"></i>
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
                            Usuarios <i className="fa-solid fa-user-plus"></i>
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
                            Proveedores{' '}
                            <i className="fa-solid fa-user-plus"></i>
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link"
                            id="pills-disabled-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-disabled"
                            type="button"
                            role="tab"
                            aria-controls="pills-disabled"
                            aria-selected="false"
                        >
                            Materiales <i className="fa-solid fa-wrench"></i>
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
                                <div className="col-sm-12 col-md-7 col-lg-7 col-12 mb-4">
                                    <div className="row user-profile">
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-12 px-5">
                                            <div className="profile-icon-user">
                                                <img
                                                    src={Cow}
                                                    alt="icon-user"
                                                    className="icon-user-profile"
                                                />
                                            </div>
                                            <div className="d-flex justify-content-around my-3">
                                                <button className="btn btn-primary btn-logout">
                                                    Salir
                                                    <i className="fa-solid fa-arrow-right-from-bracket log-out"></i>
                                                </button>
                                                <button
                                                    className="btn btn-primary btn-logout"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#EditUser"
                                                >
                                                    Editar
                                                    <i className="fa-solid fa-pen-to-square log-out"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-12 mb-3">
                                            <div className="data-user me-4">
                                                <h2 className="mulish">
                                                    Alberto Macias
                                                </h2>
                                                <p className="portal-access-title">
                                                    <b>Accesos Portal</b>
                                                </p>
                                                <p className="portal-access-assig">
                                                    Administrador
                                                </p>
                                                <hr className="line-data-profile" />
                                                <p className="portal-access-title">
                                                    <b>Tipo de Usuario</b>
                                                </p>
                                                <p className="portal-access-assig">
                                                    Administrador
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-5 col-lg-5 col-12 mb-4">
                                    <UserList />
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
                        <Users />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        tabIndex={0}
                    >
                        <Providers />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-disabled"
                        role="tabpanel"
                        aria-labelledby="pills-disabled-tab"
                        tabIndex={0}
                    >
                        <InventaryMaterial />
                    </div>
                </div>
            </div>
            <EditUser />
        </div>
    );
};
