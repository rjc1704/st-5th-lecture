import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleAuth } from "../redux/slices/authSlice";
import { addTodo } from "../redux/slices/todoSlice";

export default function Auth() {
  console.log("Auth 페이지 렌더링");
  const isLogin = useSelector((state) => state.auth.isLogin);
  // const rootState = useSelector((state) => state);
  // const isLogin = rootState.auth.isLogin;
  const dispatch = useDispatch();

  return (
    <div>
      <h1>로그인 상태 변경 페이지</h1>
      <div>현재 상태: {isLogin ? "✅ 로그인 상태" : "❌ 로그아웃 상태"}</div>
      <button onClick={() => dispatch(toggleAuth())}>
        {isLogin ? "로그아웃하기" : "로그인하기"}
      </button>
      <div>
        <label>다른 리듀서의 상태 변경해보기::</label>
        <button
          onClick={() =>
            dispatch(
              addTodo({ id: crypto.randomUUID(), content: "테스트 from Auth" }),
            )
          }
        >
          투두 추가
        </button>
      </div>
      <Link to={"/"}>TODOLIST 페이지로 이동</Link>
    </div>
  );
}
