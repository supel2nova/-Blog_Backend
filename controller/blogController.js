const Blogs = require("../models/blogs");

exports.create = (req, res) => {
  const { title, content, author } = req.body;

  switch (true) {
    case !title:
      return res.status(400).json({ error: "Please insert title" });
      break;
    case !content:
      return res.status(400).json({ error: "Please insert content" });
      break;
  }
  Blogs.create({ title, content, author }, (err, blog) => {
    if (err) {
      res.status(400).json({ error: err });
    }
    res.json(blog);
  });
};

exports.getAllblogs = (req, res) => {
  Blogs.find({}).exec((err, blogs) => {
    res.json(blogs);
  });
};

exports.getBlog = (req, res) => {
  const { id } = req.params;
  Blogs.findOne({ _id: id }).exec((err, blog) => {
    res.json(blog);
  });
};

exports.deleteBlog = (req, res) => {
  const { id } = req.params;
  Blogs.findOneAndRemove({ _id: id }).exec((err, blog) => {
    if (err) console.log(err);
    res.json({ message: "Delete completed" });
  });
};

exports.editBlog = (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  Blogs.findByIdAndUpdate(
    { _id: id },
    { title, content, author },
    { new: true }
  ).exec((err, blog) => {
    if (err) console.log(err);
    res.json({ message: "Edit completed" });
  });
};
