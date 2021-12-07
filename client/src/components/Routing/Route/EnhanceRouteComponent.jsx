import React from 'react'
import { connect } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

function EnhanceRouteComponent({isAuthenticated, navigateTo}) {
    return (
        (isAuthenticated)? <Navigate to={navigateTo} />:<Outlet />
    )
}

export default EnhanceRouteComponent
