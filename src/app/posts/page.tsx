"use client";
import { useState, useEffect } from "react";
import PostCard from "../(Components)/PostCard";
import axios from "axios";

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

const page = () => {
  const [posts, setPosts] = useState<PostCardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<PostCardProps[]>(
          "https://dummyjson.com/posts"
        );
        setPosts(res.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (

    <div className="flex flex-col gap-2 justify-content">
      {posts.length !== 0 ? (
        posts.map((post) => <PostCard key={post.id} {...post} />)
      ) : (
        <h1>No posts available</h1>
      )}




    </div>
  );
};

export default page;
