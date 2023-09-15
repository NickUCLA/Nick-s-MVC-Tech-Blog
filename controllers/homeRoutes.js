const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Fetch blog posts from the database
    const postsData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const posts = postsData.map((posts) => posts.get({ plain: true }));
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve blog posts" });
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const blogData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["id", "username"],
          },
        },
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });
    const post = postData.get({ plain: true });
    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log("error entered");
    res.status(400).json(err);
  }
});

router.get("/post", async (req, res) => {
  try {
    // Fetch blog posts from the database
    const postsData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const posts = postsData.map((posts) => posts.get({ plain: true }));
    res.render("post", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to retrieve blog posts" });
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id);
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    console.log(user);

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
