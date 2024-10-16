import React from 'react';
import Share from "../ShareCards/Share";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const PagedList: React.FC = () => {
    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="row">
                            <div className="col-4 card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                            <div className="col-4 card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                            <div className="col-4 card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                            <div className="col-4 card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                            <div className="col-4 card-spacing">
                                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
                            </div>
                        </div>
                    </div>

                    {/* Adicione mais carousel-item conforme necessário */}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default PagedList;
