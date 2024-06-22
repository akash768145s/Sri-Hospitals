import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import JoditEditor from "jodit-react";

const CreativesUploadForm = () => {
  const editor = useRef(null);
  const fileInputRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDescription, setNewsDescription] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchBlogs();
    fetchNews();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_URL}/get_blogs`
      );
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API_URL}/get_news`
      );
      setNews(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();

    if (title.length === 0 || description.length === 0 || !selectedFile) {
      toast.error("Please fill all fields.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/blogs`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Blog submitted successfully!");
      setTitle("");
      setDescription("");
      setSelectedFile(null);
      fileInputRef.current.value = null; // Reset the file input
      setError(null);
      fetchBlogs(); // Refresh the blog list
    } catch (error) {
      console.error("Error submitting blog:", error);
      setError("Failed to submit blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleNewsSubmit = async (e) => {
    e.preventDefault();

    if (newsTitle.length === 0 || newsDescription.length === 0) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/news`,
        { title: newsTitle, description: newsDescription }
      );

      toast.success("News submitted successfully!");
      setNewsTitle("");
      setNewsDescription("");
      fetchNews(); // Refresh the news list
    } catch (error) {
      console.error("Error submitting news:", error);
      toast.error("Failed to submit news. Please try again.");
    }
  };

  const handleDelete = async (id, type) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_API_URL}/${type}/${id}`
      );
      toast.success(
        `${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully!`
      );
      if (type === "blogs") {
        fetchBlogs(); // Refresh the blog list after deletion
      } else {
        fetchNews(); // Refresh the news list after deletion
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
      toast.error(`Failed to delete ${type}. Please try again.`);
    }
  };

  return (
    <div className="h-full w-full pt-[10vh]">
      <div className="flex flex-col items-center h-full justify-start bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg overflow-hidden mb-8 p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Submit Blog
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form onSubmit={handleBlogSubmit} className="space-y-4">
            <div className="w-full">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter title"
              />
            </div>
            <div className="w-full h-screen">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <JoditEditor
                ref={editor}
                value={description}
                onChange={setDescription}
                tabIndex={1}
                className="mt-1 block h-screen w-full border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
              Blog Titles
            </h2>
            <ul>
              {blogs.map((blog) => (
                <li
                  key={blog._id}
                  className="flex justify-between items-center py-2 border-b border-gray-200"
                >
                  <span>{blog.title}</span>
                  <button
                    onClick={() => handleDelete(blog._id, "blogs")}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default CreativesUploadForm;
