import React from "react";
export const Footer = () => {
  return (
    <footer className="bg-footer fixed-bottom">
      <div className="container pt-2">
        <div className="row mt-1">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
            <div className="text-center">
              © {new Date().getFullYear()}{" "}
              <span className="title-footer">Aluze | Fabrica de persianas</span>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3">
            <div className="text-center">
              <h6>Desarrollado por Gauri</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
