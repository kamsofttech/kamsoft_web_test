import { menuActionTypes } from './menuActionTypes'
const INITIAL_STATE = {
    MenuData: [],
    tabKey: null,
    menuItem:'',
    pItem:'',
    subCatData:'',
    isLoading:false
}

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case menuActionTypes.SET_PRODUCT_TAB_KEY:
            return {
                ...state,
                tabKey: action.payload,
                
            }
            case menuActionTypes.SET_MENU_ITEM:
                return {
                    ...state,
                    menuItem: action.payload,
                    
                }
                case menuActionTypes.SET_PRODUCT_ITEM:
                return {
                    ...state,
                    pItem: action.payload,
                    
                }
                case menuActionTypes.SET_SUB_CAT:
                return {
                    ...state,
                    subCatData: action.payload,
                    
                }
                case menuActionTypes.SET_IS_LOADING:
                return {
                    ...state,
                    isLoading: action.payload,
                    
                }
                case menuActionTypes.SET_TAB_KEY:
                        return {
                            ...state,
                            tabKey: action.payload
                        };
                case menuActionTypes.SET_MENU_DATA:
                    return {
                        ...state,
                        MenuData: action.payload
                    };
        default:
            return state
    }
}
export default menuReducer;