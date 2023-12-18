import axios from "axios";
import { BASE_URL } from "../constants";
import axiosInstance from './axiosConfig';

const headers = {
  'Content-Type': 'application/json', // Example header, adjust as needed
  'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJhcGk6Ly9mOTJkZGIwNS1iNzVjLTQ0NTktOTEwZi03M2M1OGQ3NWY1ZjUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iNGQzNGU0Mi03OWE2LTQ3OGUtYjNhZi0xMmNlNzMxMWZhMDkvIiwiaWF0IjoxNzAyOTA1MjM0LCJuYmYiOjE3MDI5MDUyMzQsImV4cCI6MTcwMjkwOTE1MiwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhWQUFBQTFJbUQ3d3NhR050TEhrUjFtc0ttdWY0TERUSzhwOXA2R2tyZUowc2FsbEh2dURvc0FwQ2JzSy9CZ2lEQUdDVEUiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiZjkyZGRiMDUtYjc1Yy00NDU5LTkxMGYtNzNjNThkNzVmNWY1IiwiYXBwaWRhY3IiOiIxIiwiaXBhZGRyIjoiMjAuNzIuMTMyLjE5NCIsIm5hbWUiOiJsb2dlc2giLCJvaWQiOiI3YTExNWEzZS01NDUyLTQxNzktODc4NC1jZDczMjQxZTMyZWMiLCJyaCI6IjAuQWJjQVFrN1R0S1o1amtlenJ4TE9jeEg2Q1FYYkxmbGN0MWxFa1E5enhZMTE5ZlhKQUg4LiIsInJvbGVzIjpbIkFETUlOIl0sInNjcCI6ImVuY2lwaGVyaGVhbHRoLW11bHRpdGVuYW50LnNjb3BlIiwic3ViIjoidHkzRmt1Y0Q5Z2xFQ3hVX1lvNjBUYVFlcVNvcmxucmIzNjFUT3FsZXNUTSIsInRpZCI6ImI0ZDM0ZTQyLTc5YTYtNDc4ZS1iM2FmLTEyY2U3MzExZmEwOSIsInVuaXF1ZV9uYW1lIjoibG9nZXNoMDFAZW5jaXBoZXJoZWFsdGgub25taWNyb3NvZnQuY29tIiwidXBuIjoibG9nZXNoMDFAZW5jaXBoZXJoZWFsdGgub25taWNyb3NvZnQuY29tIiwidXRpIjoiMkx5SzdrUE1kVUM4WU1RSGh3cTZBQSIsInZlciI6IjEuMCJ9.Y4K6xoba_mKCrWRHz3eA2UtGjI8qoggFb3g8AoCt8waBX2MIjKvI5HeLqzsE7dVV7kdgORfmQPQsV30P9WV8Bf45Zs99E70p7kRSwR7N82iiy-oVjcM8b0JPtsIP-sXZsae6mHyOO58iGFE6hJlkytc7VYpbGF23gRL5vtBLbnBLJ6h-WNZ1fHE4ztGkO5WBnGTbpapFYRF2qAfIIKw-35mYLTHvvthXy_NT1Y40tHKxodFuKFi2-chH01NACaXBlTgudDv05yxOa5MVOtpSYkOHgZgFQ__9Gcwm4HfJs0zcUugjqipbpgYGrJZMpIlkV0dIVbRrLciE_2Z3oXVXpg'
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
