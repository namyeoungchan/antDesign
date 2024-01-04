import NoticeWriteFormPopup from './NoticeWriteFormPopup';
import { useSelector } from 'react-redux';

export const PopupWrap = () => {
  const noticePopup = useSelector(
    (state) => state.popupInfo.noticePopupInfo.visible,
  );

  return <>{noticePopup && <NoticeWriteFormPopup />}</>;
};
