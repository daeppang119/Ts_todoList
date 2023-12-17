import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  // modal의 타입
  // confirm이랑 alert 두가지 타입
  // confirm이란 확인, 취소 버튼이 있는 모달이고
  // alert 확인만 있는 모달이에요 (ex: 에러가 발생했을때)
  modalType: "",
  title: "",
  result: false,
};

type TOpenModalPayload = {
  modalType: string;
  title: string;
};

const customModalSlice = createSlice({
  name: "customModal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<TOpenModalPayload>) => {
      const { modalType, title } = action.payload;
      // modal 열어라!
      state.isOpen = true;
      state.modalType = modalType;
      state.title = title;
    },
    setResult: (state, { payload }: { payload: boolean }) => {
      state.result = payload;
    },
    closeModal: (state) => {
      // modal 닫어!
      state.isOpen = false;
      state.modalType = "";
      state.title = "";
    },
  },
});

export const { openModal, closeModal, setResult } = customModalSlice.actions;
export default customModalSlice.reducer;
