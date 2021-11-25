import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  CircularProgress,
  Grid,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { createPostComments } from "../../actions/posts";

const Comments = ({ post }) => {
  const classes = useStyles();
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const { authData: user } = useSelector((state) => state.auth);
  const { isLoadingComments } = useSelector((state) => state.posts);

  const handleSaveComment = () => {
    dispatch(
      createPostComments(post._id, { comment, name: user?.result?.name })
    );
    setComment("");
  };
  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div
          style={{ maxHeight: "200px", height: "200px", overflowY: "hidden" }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography gutterBottom variant="h6">
                Comments
              </Typography>
            </Grid>
            <Grid item>
              {isLoadingComments && <CircularProgress size={20} />}
            </Grid>
          </Grid>
          <div className={classes.commentsInnerContainer}>
            {post.comments &&
              post.comments.map((c, i) => (
                <Typography key={i} gutterBottom variant="subtitle1">
                  <strong>{c.name}</strong>: {c.comment}
                </Typography>
              ))}
          </div>
        </div>
        {user?.result?.name && (
          <div className={classes.writeCommentsContainer}>
            <Typography gutterBottom variant="h6">
              Write a comment
            </Typography>
            <TextField
              fullWidth
              rows={4}
              variant="outlined"
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              style={{ marginTop: "5px" }}
              fullWidth
              disabled={!comment}
              color="primary"
              variant="contained"
              onClick={handleSaveComment}
            >
              Comment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
