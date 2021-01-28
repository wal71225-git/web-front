import { SHOWMODAL, HIDEMODAL} from '../const/index'
const initState = {
    show: false
  }
const modalReducer = (state = initState, action) => {
    switch(action.type) {
      case SHOWMODAL:
      return {
          show: true
      }
      case HIDEMODAL: 
      return {
          show: false
      }
      default:
      return state
    }
}
export default modalReducer