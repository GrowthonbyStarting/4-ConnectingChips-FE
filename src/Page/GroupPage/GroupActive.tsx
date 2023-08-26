import { styled } from "styled-components";
import 자전거운동 from "../../image/예시사진모음/자전거운동.jpg";
import { PageSort } from "../../Type/MissionType";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";

/** 2023-08-22 GroupActive.tsx - 작심 인증 글 */
const GroupActive = ({ passsort }: { passsort: PageSort }): JSX.Element => {
  const nowTime: string = new Date().toLocaleString();

  return (
    <GroupActiveS passsort={passsort}>
      <h2>작심 인증 글</h2>
      <PostS>
        <PostHeader nowTime={nowTime} />
        <PostImageS>
          <img src={자전거운동} alt="업로드 사진" />
        </PostImageS>
        <PostContent />
      </PostS>
    </GroupActiveS>
  );
};

export default GroupActive;

/** 2023-08-22 GroupActive.tsx - 작심 인증 글 */
const GroupActiveS = styled.div<{ passsort: PageSort }>`
  margin: ${(props) => (props.passsort === "Intro" ? "0 1rem 1rem 1rem" : "0 1rem")};
  margin-top: 1.25rem;
  h2 {
    margin-bottom: 0.5rem;
  }
`;

/** 2023-08-22 GroupActive.tsx - 그룹페이지 아티클 */
const PostS = styled.article`
  background-color: var(--color-bg);
`;

/** 2023-08-22 GroupActive.tsx - 그룹페이지 아티클 인증 이미지(임시) */
const PostImageS = styled.div`
  width: 100%;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;
