import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import GlobalStyle from "../../style/GlobalStyle";
import SignupBackBtn from "../../images/SignupBackBtn.svg";
import KkaebiProfileImg from "../../images/KkaebiProfile.svg";

const categories = [
  "빨래",
  "설거지",
  "청소",
  "생필품 구매",
  "쓰레기 버리기",
  "분리수거",
  "요리",
  "식물 관리",
  "반려동물 관리",
];

const SignupBestWorkPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) => prev.filter((item) => item !== category));
    } else {
      setSelectedCategories((prev) => [...prev, category]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header>
        <BackBtn
          src={SignupBackBtn}
          alt="뒤로가기"
          onClick={() => navigate("/signupcharacter")}
        />
      </Header>
      <Container>
        <Top>
          <Kkaebi>
            <KkaebiProfile src={KkaebiProfileImg} alt="깨비 프로필 이미지" />
            <Comment>
              거의 다 왔어요!
              <br />
              자신있는 집안일을 선택해주세요.
            </Comment>
          </Kkaebi>
          <CategoryContainer>
            {categories.map((category) => (
              <CategoryButton
                key={category}
                $isSelected={selectedCategories.includes(category)}
                onClick={() => toggleCategory(category)}
              >
                {category}
              </CategoryButton>
            ))}
          </CategoryContainer>
        </Top>
        <Bottom>
          <NextBtn
            $isActive={selectedCategories.length > 0}
            onClick={() => {
              if (selectedCategories.length > 0) {
                console.log("선택된 카테고리:", selectedCategories);
                navigate("/signupkkaebicomment");
              }
            }}
          >
            시작하기
          </NextBtn>
        </Bottom>
      </Container>
    </>
  );
};

export default SignupBestWorkPage;

const Header = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  align-self: stretch;
  background-color: #fafafa;
`;

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
  height: calc(100vh - 132px);
  overflow: hidden;
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
  line-height: 150%;
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
  line-height: 150%;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const CategoryButton = styled.button`
  padding: 20px 20px;
  border-radius: 8px;
  border: 0.5px solid ${(props) => (props.$isSelected ? "#AA91E8" : "#cecece")};
  background-color: ${(props) => (props.$isSelected ? "#E4D9FF" : "#FFF")};
  color: ${(props) => (props.$isSelected ? "#000" : "#787878")};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
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
    props.$isActive ? "var(--key_purple, #AA91E8)" : "#bebebe"};
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#967bd9" : "#bebebe")};
  }
`;