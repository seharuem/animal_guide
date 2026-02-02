import { Menu, Tab } from './home.style';

export function Links() {
  return (
    <div className="ml-auto flex flex-col gap-8 max-lg:hidden">
      <Menu to="villager">주민 명부</Menu>
      <Menu to="popularity">인기 투표</Menu>
      <Menu to="board">커뮤니티</Menu>
    </div>
  );
}

export function Links2() {
  return (
    <div className="bg-(--c) text-white/60 shadow-(--shadow) justify-between flex flex-col gap-3 w-max p-5 rounded-3xl fixed left-5 top-20 sm:hidden">
      <Tab to="villager">주민 명부</Tab>
      <Tab to="popularity">인기 투표</Tab>
      <Tab to="board">커뮤니티</Tab>
      <Tab to="login">로그인</Tab>
      <Tab to="sign">회원가입</Tab>
    </div>
  );
}
