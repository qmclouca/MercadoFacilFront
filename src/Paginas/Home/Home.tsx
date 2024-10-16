import NavBar from '../../Componentes/NavBar/NavBar';
import PagedList from '../../Componentes/PagedList/PagedList';

import './Home.css';
const Home = () => {
    return(
        <>
            <div className='background'>
                <NavBar/>
                <PagedList/>
            </div>
        </>        
    );
}
export default Home