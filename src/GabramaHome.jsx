import React, { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';

const GabramaHome = () => {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (post.trim()) {
      setPosts([{ content: post, timestamp: new Date() }, ...posts]);
      setPost('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Gabrama</h1>
      <Card>
        <CardContent>
          <Textarea
            placeholder="What's on your mind?"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <Button onClick={handlePost}>Post</Button>
          </div>
        </CardContent>
      </Card>
      <div className="mt-6 space-y-4">
        {posts.map((p, index) => (
          <Card key={index}>
            <CardContent>
              <p>{p.content}</p>
              <small className="text-gray-500">
                {p.timestamp.toLocaleString()}
              </small>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GabramaHome;