import { ShareCardProps } from '../../Interfaces/ShareCardProps';
import './Share.css'; 


const Share: React.FC<ShareCardProps> = ({ logoUrl, longName, symbol, regularMarketPrice}) => {
    return (
        <>
           <div className="card card-extra-styles">
                <h2 className="card-title">{longName}</h2>
                <img src={logoUrl} className="share-card__image" alt="Share logo"/>
                <div className="card-body">
                    <p className="card-text">{symbol}</p>
                    <p className="card-text">{regularMarketPrice}</p>
                </div>
            </div>
        </>
    );
}

export default Share;
