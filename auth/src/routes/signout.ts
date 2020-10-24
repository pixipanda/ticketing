import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req, resp) => {
  console.log("Signout from the app");
  req.session = null;
  return resp.send({});
});

export { router as signoutRouter };
