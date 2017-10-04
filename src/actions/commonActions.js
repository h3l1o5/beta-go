import { SET_IS_LOADING } from './types'

const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  isLoading,
})

export { setIsLoading }
