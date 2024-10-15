import NavBar from '../../Componentes/NavBar/NavBar';
import PagedList from '../../Componentes/PagedList/PagedList';

import './Home.css';
const Home = () => {
    return(
        <>
            <div>
                <NavBar/>
                <PagedList/>
            </div>
        </>        
    );
}
export default Home