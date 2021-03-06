const express = require("express");
const postRoute = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const Posts = require("../models/Posts");
const Users = require("../models/Users");
postRoute.post(
  "/",
  [
    check("title", "title is needed").not().isEmpty().isLength({ min: 6 }),
    check("body", "put a real txt").not().isEmpty().isLength({ min: 6 }),
    check("photo", "put a real image").not().isEmpty()
  ],
  auth,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    try {
      const { title, body , photo} = req.body;
      let user = await Users.findById(req.user.payload.user.id).select(
        "-password"
      );
      let post = new Posts({
        title,
        body,
        photo,
        postedby: user,
      });
      await post.save();
      return res.status(200).json({ msg: "post saved", post });
    } catch (error) {
      return res.status(401).json({ error });
    }
  }
);

postRoute.get("/", async (req, res) => {
  try {
    let posts = await Posts.find();
    return res.status(200).json({ pos });
  } catch (error) {
    res.status(401).json({ error });
  }
});
postRoute.get("/mypost", auth, async (req, res) => {
  try {
    let user = await Users.findById(req.user.payload.user.id).select(
      "-password"
    );
    let myposts = await Posts.find({ postedby: user });

    return res.status(200).json({ myposts });
  } catch (error) {
    return res.status(401).json({ error });
  }
});
module.exports = postRoute;
