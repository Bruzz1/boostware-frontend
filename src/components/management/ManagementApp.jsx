import './ManagementApp.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HeaderComponent from '../core-components/HeaderComponent';
import FooterComponent from '../core-components/FooterComponent';
import LoginComponent from '../core-components/LoginComponent';
import LogoutComponent from '../core-components/LogoutComponent';
import TasksComponent from '../core-components/TasksComponent';
import ErrorComponent from '../core-components/ErrorComponent';
import WelcomeComponent from '../core-components/WelcomeComponent';
import AuthProvider, { useAuth } from '../core-components/security/AuthContext';

function AuthenticatedRoute({ children }) {
    const authContext = useAuth()
    if (authContext.isAuthenticated) {
        return children
    }
    return <Navigate to="/" />
}

export default function ManagementApp() {

    return (
        <div className="ManagementApp flex flex-col h-screen justify-between">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<LoginComponent />}></Route>
                        <Route path="/login" element={<LoginComponent />}></Route>
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path='/tasks' element={
                            <AuthenticatedRoute>
                                <TasksComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />

                        <Route path='*' element={<ErrorComponent />}></Route>
                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}




