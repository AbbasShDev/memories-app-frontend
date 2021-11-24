import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { createComment, getComments } from "../../actions/comments";

const Comments = ({ post }) => {
  const classes = useStyles();
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const { authData: user } = useSelector((state) => state.auth);
  const { comments, isLoading } = useSelector((state) => state.comments);

  useEffect(() => {
    if (post) {
      dispatch(getComments({ postId: post._id }));
    }
  }, [post]);

  const handleSaveComment = () => {
    dispatch(
      createComment({
        postId: post._id,
        comment,
        creatorName: user?.result?.name,
      })
    );
    setComment("");
    dispatch(getComments({ postId: post._id }));
  };
  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          {isLoading && <CircularProgress />}

          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {!isLoading &&
            comments &&
            comments.map((c, i) => (
              <Typography key={i} gutterBottom variant="subtitle1">
                {`${c.creatorName}: ${c.comment}`}
              </Typography>
            ))}
        </div>
        {user?.result?.name && (
          <div style={{ width: "70%" }}>
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
              style={{ marginTop: "10px" }}
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
