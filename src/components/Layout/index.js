import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return (
    <div className="App">
    <Sidebar />
    <div className='page'>
        <Outlet />
        <br/>
        <span className='bottom-tag-html'>&lt;/html&gt;</span>
    </div>
    </div>
    ) 
}

export default Layout