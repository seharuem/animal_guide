import { useEffect, useState } from "react";
import { getMemberList } from "./memberApi";

function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getMemberList()
      .then((res) => {
        console.log("응답 데이터 👉", res.data);
        setMembers(res.data);
      })
      .catch((err) => {
        console.error("에러 👉", err);
      });
  }, []);

  return (
    <div>
      <h2>회원 목록</h2>
      <ul>
        {members.map((member) => (
          <li key={member.memberNo}>
            {member.memberId} / {member.memberPw} / {member.memberName} / {member.memberEmail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MemberList;
