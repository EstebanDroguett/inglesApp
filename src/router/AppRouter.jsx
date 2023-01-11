//import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';                 //1
import { LoginPage } from '../auth';                                        //1
import { InglesPage } from '../ingles';                                 //1
//import { useAuthStore } from '../hooks';
//import { getEnvVariables } from '../helpers';

export const AppRouter = () => {

    //const { status, checkAuthToken } = useAuthStore();

    /*useEffect(() => {
        checkAuthToken();
    }, [])*/


    /*if (status === 'checking') {
        return (
            <h3>Cargando...</h3>
        )
    }*/

    const status = 'not-authenticated';

    //console.log(getEnvVariables());

    return (
        //------------------------------------------------------------------------1------------------------------------------------------------------------
        <Routes>
            {
                (status === 'not-authenticated')
                    ? (
                        <>
                            <Route path="/auth/*" element={<LoginPage />} />
                            <Route path="/*" element={<Navigate to="/auth/login" />} />
                        </>
                    )
                    :
                    (
                        <>
                            <Route path="/" element={<InglesPage />} />
                            <Route path="/*" element={<Navigate to="/" />} />
                        </>
                    )
            }
        </Routes>
        //------------------------------------------------------------------------1------------------------------------------------------------------------
    )
}
