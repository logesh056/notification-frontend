import axios from "axios";
import { BASE_URL } from "../constants";
import axiosInstance from './axiosConfig';

const headers = {
  'Content-Type': 'application/json', // Example header, adjust as needed
  'X-Tenant':'default',
  'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJhcGk6Ly9mOTJkZGIwNS1iNzVjLTQ0NTktOTEwZi03M2M1OGQ3NWY1ZjUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iNGQzNGU0Mi03OWE2LTQ3OGUtYjNhZi0xMmNlNzMxMWZhMDkvIiwiaWF0IjoxNzAxMDgyNTU5LCJuYmYiOjE3MDEwODI1NTksImV4cCI6MTcwMTA4Nzg2MywiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhWQUFBQXhmZDhWZkxKeWUyaGU1dStlTTUrSi9BU2FSQU4vWTFDVyszQmxLbGFDZm5XazZGeUE0L2c3QWJmZjRpSTgrRGMiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiZjkyZGRiMDUtYjc1Yy00NDU5LTkxMGYtNzNjNThkNzVmNWY1IiwiYXBwaWRhY3IiOiIxIiwiaXBhZGRyIjoiMjAuNzIuMTMyLjE5NCIsIm5hbWUiOiJsb2dlc2giLCJvaWQiOiI3YTExNWEzZS01NDUyLTQxNzktODc4NC1jZDczMjQxZTMyZWMiLCJyaCI6IjAuQWJjQVFrN1R0S1o1amtlenJ4TE9jeEg2Q1FYYkxmbGN0MWxFa1E5enhZMTE5ZlhKQUg4LiIsInJvbGVzIjpbIkFETUlOIl0sInNjcCI6ImVuY2lwaGVyaGVhbHRoLW11bHRpdGVuYW50LnNjb3BlIiwic3ViIjoidHkzRmt1Y0Q5Z2xFQ3hVX1lvNjBUYVFlcVNvcmxucmIzNjFUT3FsZXNUTSIsInRpZCI6ImI0ZDM0ZTQyLTc5YTYtNDc4ZS1iM2FmLTEyY2U3MzExZmEwOSIsInVuaXF1ZV9uYW1lIjoibG9nZXNoMDFAZW5jaXBoZXJoZWFsdGgub25taWNyb3NvZnQuY29tIiwidXBuIjoibG9nZXNoMDFAZW5jaXBoZXJoZWFsdGgub25taWNyb3NvZnQuY29tIiwidXRpIjoiRFljS1p4TVMzME8ySlF1cHp3dEtBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.j9kc8JN6xDzREm-l8uNgR-58Ngz8FnFRao1-IN48_goPyH7bnIXTOZoxrmK73_myBwtKh9Vj_FBsjBkp7OiYq3Op3cCvtZL3kJmCjmJEZD2XVQ8TwuqivGVvnb81JI_HvoTKPWENzAyqcfoTIfAuErSSZQE2pyG-iikzZno2ek2xFSf1Gytm7fcpn2BSNXJnJ9NYscqNo2o-1gav175cQax4DSodL1daCzMIEXx7MsBF4m3TsfNVAOIQZnuKbtN3XHR0dhTxd74exqnpEflGOWVLzRoz2_zv34Y2YHaqrshVIHOeHdaNq473QdsEoB4T0A6JV4vLa7vTo_Jkjgavxg'
};


export const getUserByUsername = (username) => {
  return axios.get(`${BASE_URL}/user/${username}`, { headers: headers });
};

export const getAllPosts = () => {
  return axios.get(`${BASE_URL}/post`, { headers: headers });
};

export const getPostById = (id) => {
  return axios.get(`${BASE_URL}/post/${id}`, { headers: headers });
};

export const createPost = (post) => {
  return axios.post(`${BASE_URL}/post`, post, { headers: headers });
};

export const addLike = (likeRequest) => {
  return axios.post(`${BASE_URL}/post/like`, likeRequest, { headers: headers });
};

export const removeLike = (likeRequest) => {
  return axios.delete(`${BASE_URL}/post/like`, { data: likeRequest, headers: headers });
};

export const getComments = (postID) => {
  return axios.get(`${BASE_URL}/post/comment/${postID}`, { headers: headers });
};

export const addComment = (commentRequest) => {
  return axios.post(`${BASE_URL}/post/comment`, commentRequest, { headers: headers });
};

export const removeComment = (commentRequest) => {
  return axios.delete(`${BASE_URL}/post/comment`, { data: commentRequest, headers: headers });
};

export const getAllNotifs = (userID) => {
  return axios.get(`${BASE_URL}/notification/${userID}`, { headers: headers });
};

export const changeNotifStatusToRead = (notifID) => {
  return axios.patch(`${BASE_URL}/notification/read/${notifID}`, null, { headers: headers });
};
