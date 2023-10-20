import { Navigate, Outlet } from 'react-router-dom'

function NormalRoute(): JSX.Element {
  //if (!isAuthenticated()) return <Outlet />
  if (true) return <Outlet />
  return <Navigate to={'/'} />
}
NormalRoute.displayName = 'NormalRoute'
export default NormalRoute
