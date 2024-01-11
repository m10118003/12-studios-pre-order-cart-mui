import React, { useState, useEffect } from "react";
import Navbar from '@/components/Navbar';
import { Button, Box, Typography, Container } from '@mui/material';
import { createPost, updatePost, deletePost, getPost } from "@/pages/api/postService";
import PropTypes from 'prop-types';

const ActionButton = ({ onClick, children, sx }) => {
    return (
        <Button onClick={onClick} sx={sx} variant="outlined">
            {children}
        </Button>
    );
};
ActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

const buttonStyle = { color: '#213547', border: "1px solid transparent", fontSize: '1.5rem', fontWeight: '600', lineHeight: '2rem', mb: 2, p: 2 };

export default function FetchDemo() {
    const [post, setPost] = useState(null);
    useEffect(() => {
        getPost(1).then((res => res)).then((data) => {
            setPost(data);
        });
    }, []);

    // 定義 GetPost prop
    const handleGetPost = () => {
        let t1 = new Date(); // 測試請求開始前的 timestamp
        getPost(1).then((res => res)).then((getData) => {
            let t2 = new Date(); // 請求結束後的 timestamp
            console.log('diff', t2 - t1 + 'ms'); // 請求所需的總時間
            setPost(getData);
        });
    };

    // 定義 CreatePost prop
    const handleCreatePost = () => {
        const createPostData = { title: 'Hello !', body: 'Hi body.' };
        createPost(createPostData).then((res => res)).then((createData) => {
            setPost(createData); // 建立資料
        });
    };

    // 定義 UpdatePost prop
    const handleUpdatePost = () => {
        const updatePostData = { title: 'Meow Hello !', body: 'Meow body.' };
        updatePost(updatePostData).then((res => res)).then((updateData) => {
            setPost(updateData); // 更新資料
        })
    }

    // 定義 DeletePost prop
    const handleDeletePost = () => {
        deletePost(1).then((res => res)).then((deleteData) => {
            alert("Post deleted!")
            setPost(deleteData); // 刪除資料
        })
    }

    // 讀取畫面
    // if (!post) return null; // 整個畫面清空
    if (!post) return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Typography>Loading...</Typography>
        </Box>
    );

    return (
        <Box>
            <Navbar />
            <Container sx={{ textAlign: 'center', color: 'midnightblue' }}>
                <Typography variant="h3" sx={{ cursor: 'crosshair', fontWeight: 'bold', textDecoration: 'underline', p: 5, '&:hover': { borderRadius: 1, bgcolor: 'skyblue', color: '#4F46E5' } }}>
                    Fetch: Get data from an API
                </Typography>
                <Box sx={{ p: 1 }}>
                    <ActionButton onClick={handleGetPost} sx={{ ...buttonStyle, bgcolor: '#9CA3AF', '&:hover': { bgcolor: '#E0F2FE', color: '#4F46E5', border: 'dashed' } }}>Get Post</ActionButton>
                    <ActionButton onClick={handleCreatePost} sx={{ ...buttonStyle, bgcolor: '#D1D5DB', '&:hover': { bgcolor: '#BAE6FD', color: '#4F46E5', border: 'dashed' } }}>Create Post</ActionButton>
                    <ActionButton onClick={handleUpdatePost} sx={{ ...buttonStyle, bgcolor: '#E5E7EB', '&:hover': { bgcolor: '#86EFAC', color: '#4F46E5', border: 'dashed' } }}>Update Post</ActionButton>
                    <ActionButton onClick={handleDeletePost} sx={{ ...buttonStyle, bgcolor: '#F3F4F6', '&:hover': { bgcolor: '#FACC15', color: '#4F46E5', border: 'dashed' } }}>Delete Post</ActionButton>
                </Box>
                <Box textAlign="left" maxWidth="46rem" mx="auto" p={1}>
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>{post.title}</Typography>
                    <Typography variant="h6" sx={{ mt: 2 }}>{post.body}</Typography>
                </Box>
            </Container>
        </Box>
    );
}