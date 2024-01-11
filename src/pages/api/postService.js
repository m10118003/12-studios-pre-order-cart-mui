// 專門處裡與 post 相關的 API request
// import axios from "axios";

// const client = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/posts",
// });

// const getPost = (id) => client.get(`/${id}`);
// const createPost = (postData) => client.post("", postData);
// // const updatePost = (id, postData) => client.put(`/${id}`, postData);
// const updatePost = (postData) => client.put(`/1`, postData);
// const deletePost = (id) => client.delete(`/${id}`);

// export { getPost, createPost, updatePost, deletePost };


const baseURL = "https://jsonplaceholder.typicode.com/posts";

const getPost = async (id) => {
  const response = await fetch(`${baseURL}/${id}`, {
    method: 'GET',
    headers:  new Headers({
      'Content-Type': 'application/json',
    })
  })
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return await response.json();
};

const createPost = async (postData) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return await response.json();
};

const updatePost = async (postData) => {
  const response = await fetch(`${baseURL}/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return await response.json();
};

const deletePost = async (id) => {
  const response = await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return await response.json();
};

export { getPost, createPost, updatePost, deletePost };