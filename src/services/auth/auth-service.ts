import { SERVICE } from '../config'

//estos solo son ejemplos, no funcionan de nada
const getSome = async (): Promise<any> => {
  return await SERVICE().get(`/some/`)
}

const deleteService = async (id: number): Promise<any> => {
  return await SERVICE().delete(`/some/${id}`)
}
const updateService = async (userData: any): Promise<any> => {
  return await SERVICE().put('/some/some2', userData)
}
//estos solo son ejemplos, no funcionan de nada

export { getSome, deleteService, updateService }
