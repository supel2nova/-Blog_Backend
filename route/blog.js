const express = require("express");
const router = express.Router();
const {
  create,
  getAllblogs,
  getBlog,
  deleteBlog,
  editBlog,
} = require("../controller/blogController");
const { reqLogin } = require("../controller/authcontroller");

router.post("/create", reqLogin, create);
router.get("/getblogs", getAllblogs);
router.get("/getblog/:id", getBlog);
router.delete("/getblog/:id", reqLogin, deleteBlog);
router.put("/getblog/edit/:id", reqLogin, editBlog);

module.exports = router;
