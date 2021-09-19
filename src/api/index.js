import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_API_URL });

export const fetchPosts = () => axios.get("/posts");
export const createPost = (newPost) => axios.post("/posts", newPost);
export const updatePost = (id, post) => axios.patch(`/posts/${id}`, post);
export const deletePost = (id) => axios.delete(`/posts/${id}`);
export const likePost = (id) => axios.patch(`/posts/${id}/like`);

export const signIn = (formData) => axios.post("/users/signin", formData);
export const signUp = (formData) => axios.post("/users/signup", formData);
