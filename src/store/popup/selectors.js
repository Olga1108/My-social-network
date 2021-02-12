export const popupStateSelector = state => state.popup;
export const isOpenPopupStateSelector = state => popupStateSelector(state).isOpen;