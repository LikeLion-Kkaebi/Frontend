import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import GlobalStyle from "../style/GlobalStyle";
import SignupBackBtn from "../images/SignupBackBtn.svg";
import KkaebiProfileImg from "../images/KkaebiProfile.svg";

import BackHeader from "../components/BackHeader";

const DayPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 8) {
      setError("이름은 최대 8글자로 작성해주세요.");
      setIsButtonActive(false); // 비활성화 상태 유지
    } else if (inputValue.length === 0) {
      setError("");
      setIsButtonActive(false); // 값이 없으면 비활성화
    } else {
      setError("");
      setIsButtonActive(true); // 8글자 이하 값이 있으면 활성화
    }
    setName(inputValue);
  };

  const handleInputBlur = () => {
    if (name.length > 8 || name.length === 0) {
      setIsButtonActive(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <BackHeader title="12월 13일" pageurl={"/month"} />
      <Container>
        <Top>
          <Kkaebi>
            <KkaebiProfile src={KkaebiProfileImg} alt="깨비 프로필 이미지" />
            <Comment>이름을 알려주세요.</Comment>
          </Kkaebi>
          <Input
            placeholder="ex) 깨비"
            value={name}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Top>
        <Bottom>
          <NextBtn
            isActive={isButtonActive}
            onClick={() => isButtonActive && navigate("/signupcodeinput")}
          >
            다음
          </NextBtn>
        </Bottom>
      </Container>
    </>
  );
};

export default DayPage;

const BackBtn = styled.button`
  width: 9px;
  height: 18px;
  border: none;
  background: url(${SignupBackBtn}) no-repeat center;
  background-size: contain;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #fafafa;
  height: calc(100vh - 132px); /* Header 패딩과 NextBtn 마진 포함 */
  overflow: hidden; /* 스크롤 숨기기 */
  padding-bottom: 74px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

const Kkaebi = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #000;
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
  margin-bottom: 20px;
`;

const KkaebiProfile = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 16px;
`;

const Comment = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  height: 46px;
  padding: 20px;
  align-items: center;
  border-radius: 8px;
  border: 0.5px solid #cecece;
  background: #fff;
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  box-sizing: border-box; /* 패딩 포함 너비 계산 */

  &::placeholder {
    color: #787878;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &:focus {
    border: 0.5px solid #000; /* 포커스 시 검정색 테두리 */
    outline: none; /* 기본 포커스 효과 제거 */
  }
`;

const ErrorMessage = styled.div`
  color: #f00;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 12px;
  margin-left: 20px;
`;

const Bottom = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const NextBtn = styled.button`
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 8px;
  background: ${(props) =>
    props.isActive ? "var(--key_purple, #AA91E8)" : "#bebebe"};
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.isActive ? "pointer" : "default")};
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#967bd9" : "#bebebe")};
  }
`;
