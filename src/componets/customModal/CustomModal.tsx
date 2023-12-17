import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { closeModal, setResult } from "../../redux/modules/customModalSlice";

const CustomModal = () => {
  const { isOpen, modalType } = useAppSelector((state) => state.customModal);
  const dispatch = useAppDispatch();

  const handleOnClickConfirm = (btnType: string) => {
    if (btnType === "confirm") dispatch(setResult(true));
    else dispatch(setResult(false));
    dispatch(closeModal());
  };

  return (
    <StCustomModalWrapper $isOpen={isOpen}>
      <div>
        <h1>CustomModal</h1>
        <p>title</p>
        <div>
          <button onClick={() => handleOnClickConfirm("cancle")}>취소</button>
          <button onClick={() => handleOnClickConfirm("confirm")}>확인</button>
        </div>
      </div>
    </StCustomModalWrapper>
  );
};

const StCustomModalWrapper = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  > div {
    width: 50%;
    height: 30%;
    margin: auto;
    background-color: white;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
  }
`;

export default CustomModal;
