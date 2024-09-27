import NavBar from '../../Componentes/NavBar/NavBar';
import Share from '../../Componentes/ShareCards/Share';
import './Home.css';
const Home = () => {
    return(
        <>
            <div>
                <NavBar/>
                <Share logoUrl="https://s3-symbol-logo.tradingview.com/brasileiro-petrobras--big.svg" longName="Petróleo Brasileiro S.A. - Petrobras" symbol="PETR4" regularMarketPrice="2,000"/>
            </div>
        </>        
    );
}
export default Home