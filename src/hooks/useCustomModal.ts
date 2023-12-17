import store from "../redux/config/configStore";
import { useAppDispatch } from "../redux/hooks";
import { openModal } from "../redux/modules/customModalSlice";

export const useCustomModal = () => {
  // open 끝.
  const dispatch = useAppDispatch();

  const handleOpenModal = (title: string, modalType: string) => {
    return new Promise((res) => {
      dispatch(openModal({ title, modalType }));
      // 여기에서 modal을 열고 대기한다.
      const unsubscribe = store.subscribe(() => {
        const result = store.getState().customModal.result;
        res(result);
        unsubscribe();
      });
    });
  };
  return { handleOpenModal };
};
