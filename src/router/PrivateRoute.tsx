/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute(): JSX.Element {
  if (true) return <Outlet />
  return <Navigate to={'/'} />
}
PrivateRoute.displayName = 'PrivateRoute'
export default PrivateRoute
