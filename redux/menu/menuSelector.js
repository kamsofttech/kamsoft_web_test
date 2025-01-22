import { createSelector } from 'reselect'
const selectMenu = state => state.menu
export const selectProductTabKey = createSelector(
    [selectMenu],
    (menu) => menu.tabKey
)
export const selectMenuItem = createSelector(
    [selectMenu],
    (menu) => menu.menuItem
)
export const selectProductItem = createSelector(
    [selectMenu],
    (menu) => menu.pItem
)
export const selectSubCatData = createSelector(
    [selectMenu],
    (menu) => menu.subCatData
)
export const selectIsLoading = createSelector(
    [selectMenu],
    (menu) => menu.isLoading
)