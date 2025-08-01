const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate("author", "name email");
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch blogs!" });
    }
}

exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate("author", "name email");
        if (!blog) return res.status(400).json({ message: "Blog not found" });
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch blog" });
    }
}

exports.createBlog = async (req, res) => {
    const { title, content } = req.body;
    try {
        const blog = await Blog.create({
            title,
            content,
            author: req.user._id,
        });
        res.status(201).json(blog);
    } catch (err) {
        res.status(400).json({ message: "Failed to create blog!" });
    }
}

exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id);

        if (!blog) return res.status(404).json({ message: "Blog not found!" });
        if (blog.author.toString() !== req.user._id.toString()) return res.status(403).json({ message: "Not authorized!" });

        blog.title = req.body.title || blog.title;
        blog.content = req.body.content || blog.content;
        const updated = await blog.save();

        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ message: "Failed to update blog" });
    }
}

exports.deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findById(id);

        if (!blog) return res.status(404).json({ message: "Blog not found!" });
        if (blog.author.toString() !== req.user._id.toString()) return res.status(403).json({ message: "Not authorized!" });

        await Blog.findByIdAndDelete(id);
        res.status(200).json({ message: "Blog deleted" });
    } catch (err) {
        res.status(500).json({ message: "Failed to delete blog!" });
    }
}