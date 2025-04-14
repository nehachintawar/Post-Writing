// components/PostCard.jsx
import React,{useEffect, useState} from "react";
import { generateUsername } from "unique-username-generator";

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



const PostCard: React.FC<PostCardProps> =  ({ id, title, body, tags, reactions, views, userId}) => {

  const [username, setUsername] = useState<String>("");
  
    useEffect(() => {
      const username = generateUsername();
setUsername(username);
    }, [])
  return (
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4">
        {/* Header: Profile Info */}
        <div className="flex items-start space-x-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Neha"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{username}</h3>
            <p className="text-sm text-gray-500">Product Designer | SaaS | UX Strategist</p>
            <span className="text-xs text-gray-400">Now • 🌐</span>
          </div>
        </div>
    <div >
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600">{body}</p>

      

{/* Optional Footer (e.g., hashtags, buttons) */}
<div className="text-blue-600 text-sm font-medium mt-2">
  #uxdesign #productthinking
</div>
</div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between text-sm text-gray-500">
        <div>
          👍 {reactions.likes} &nbsp; 👎 {reactions.dislikes}
        </div>
        <div>👁️ {views} views</div>
      </div>
    </div>
  );
};

export default PostCard;

//className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4