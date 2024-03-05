import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Layout>HomePage</Layout>} />
            <Route path='/user-profile' element={<span>UserProfile</span>} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};

export default AppRoutes;