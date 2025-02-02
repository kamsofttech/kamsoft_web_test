
import Axios from 'axios';
import {API_PATH } from '../../Global';
import {getMenuItems} from '../../lib/api'
import { menuActionTypes } from './menuActionTypes' // get dynamic user acton types

export const setProductTabKey = data => ({
    type: menuActionTypes.SET_PRODUCT_TAB_KEY,
    payload: data
})
export const setMenuItem = data => ({
    type: menuActionTypes.SET_MENU_ITEM,
    payload: data
})
export const setProductItem = data => ({
    type: menuActionTypes.SET_PRODUCT_ITEM,
    payload: data
})
export const setSubCatData = data => ({
    type: menuActionTypes.SET_SUB_CAT,
    payload: data
})
export const setIsLoading = data => ({
    type: menuActionTypes.SET_IS_LOADING,
    payload: data
})
export const setTabKey = data => ({
    type: menuActionTypes.SET_TAB_KEY,
    payload: data

})
export const setMenuData = data => ({
    type: menuActionTypes.SET_MENU_DATA,
    payload: data

})
export const fetchMenuData = () => {
    return async dispatch => {
        const menuItems = await getMenuItems() //applo client 
        dispatch(setMenuData(menuItems))
        

    }
}