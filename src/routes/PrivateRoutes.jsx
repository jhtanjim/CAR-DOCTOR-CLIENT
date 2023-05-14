import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <progress className="progress w-56"></progress>
    }




    // jdi user takhe
    if (user?.email) {
        return children
    }
    return (
        <div>

        </div>
    );
};

export default PrivateRoutes;