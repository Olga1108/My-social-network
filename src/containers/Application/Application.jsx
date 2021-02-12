import React from 'react';
import { useSelector } from 'react-redux';

import Auth from '../Auth/Auth';
import RoutWrap from '../RoutWrap/RoutWrap';
import Popup from '../Popup';

import { getAuthStatusSelector } from '../../store/users/selectors';
import { isOpenPopupStateSelector } from '../../store/popup/selectors'

const Application = () => {
  const isOpen = useSelector(isOpenPopupStateSelector);
  const isAuth = useSelector(getAuthStatusSelector);

  return (
    <>
      {isAuth ? <RoutWrap /> : <Auth />}
      {isOpen && <Popup message="ASdfghjj" />}
    </>
  );
}

export default Application;