// src/api/memberApi.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/members";

export const getMemberList = () => {
  return axios.get(BASE_URL);
};

// 회원 등록
export const createMember = (member) => {
  // member: { name, id, pw }
  return axios.post(BASE_URL, member);
};
