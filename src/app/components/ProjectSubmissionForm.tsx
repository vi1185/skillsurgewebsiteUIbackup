'use client';

import React, { useState } from 'react';
import axios from 'axios';

const ProjectSubmissionForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [repository, setRepository] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('repository', repository);
    if (screenshot) {
      formData.append('screenshot', screenshot);
    }

    try {
      await axios.post('/api/projects', formData);
      setMessage('Project submitted successfully!');
      setTitle('');
      setDescription('');
      setRepository('');
      setScreenshot(null);
    } catch (error) {
      setMessage('Failed to submit project.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {message && <p className="text-center text-green-500">{message}</p>}
      <div>
        <label className="block text-sm font-medium text-gray-300">Project Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full mt-1 p-2 bg-gray-800 rounded"
          placeholder="Enter project title"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full mt-1 p-2 bg-gray-800 rounded"
          placeholder="Describe your project"
        ></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Repository URL</label>
        <input
          type="url"
          value={repository}
          onChange={(e) => setRepository(e.target.value)}
          required
          className="w-full mt-1 p-2 bg-gray-800 rounded"
          placeholder="https://github.com/username/project"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Screenshot</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setScreenshot(e.target.files?.[0] || null)}
          className="w-full mt-1"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
      >
        Submit Project
      </button>
    </form>
  );
};

export default ProjectSubmissionForm; 