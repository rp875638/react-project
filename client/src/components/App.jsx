import React from 'react';
import { Route, Routes } from 'react-router';
import GraphComponent from './Graph/DatagraphComponent';
import ListComponent from './List/ListComponent';
import LoginComponent from './UserAuthentication/LoginComponent';
import EnhanceRouteComponent from './Routing/Route/EnhanceRouteComponent';
import SigninComponent from './UserAuthentication/SigninComponent';
import { connect } from 'react-redux';
import EnhanceLinkComponent from './Routing/Link/EnhanceLinkComponent';
import { NavLink } from 'react-router-dom';
import PrintComponent from './Print/PrintComponent';

function App({isAuthenticated}) {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 shadow-lg p-3 mt-3 mx-auto">
                    <EnhanceLinkComponent isAuthenticated={isAuthenticated}>
                        <NavLink to='user/graph' className="btn">Graph</NavLink>
                        <NavLink to="user/list" className="btn">List</NavLink>
                    </EnhanceLinkComponent>
                    <EnhanceLinkComponent isAuthenticated={!isAuthenticated}>
                        <NavLink to="/" className="btn outline-0">SignIn</NavLink>
                        <NavLink to="/login"  className="btn outline-0">Login</NavLink>
                    </EnhanceLinkComponent>
                </div> 
            </div>
            
            <div className="row mt-5">
                <div className="col-md-6 mx-auto p-3 mb-4 shadow-lg">
                    <Routes>
                        <Route path='/user' element={<EnhanceRouteComponent isAuthenticated={!isAuthenticated} navigateTo='/login' />}>
                            <Route path="list" element={ <PrintComponent component={ListComponent} />} />
                            <Route path='graph' element={ <PrintComponent component={GraphComponent} />} />
                        </Route>
                        <Route path='/' element={<EnhanceRouteComponent isAuthenticated={isAuthenticated} navigateTo='user/graph' />}>
                            <Route path='/' exact element={<SigninComponent />} />
                            <Route path='login' element={<LoginComponent />} />
                        </Route>
                        <Route path="*" element={<h1>Page not found</h1>} />
                    </Routes>
                </div>
            </div>
            
        </div>
    )
}



const mapStateToProps = (state)=>{
    return {
        isAuthenticated: state.user.data.isAuthenticated
    }
}

export default connect(mapStateToProps)(App);