import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import useStyles from "./styles";
import { getPost, getPostsBySearch } from "../../actions/posts";

const PostDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) dispatch(getPostsBySearch({ tags: post.tags.join(",") }));
  }, [post]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  const openPost = (id) => history.push(`/posts/${id}`);
  return (
    <Paper className={classes.mainPaper} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Realtime Chat - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Comments - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
      </div>
      {recommendedPosts.length > 0 && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <Grid container justifyContent="start">
            {recommendedPosts.map(
              ({ title, message, name, likes, selectedFile, _id }) => (
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={3}
                  style={{ margin: "20px", cursor: "pointer" }}
                  onClick={() => openPost(_id)}
                  key={_id}
                >
                  <Card sx={{ maxWidth: 345 }} elevation={6}>
                    <CardHeader title={title} subheader={name} />
                    <CardMedia
                      component="img"
                      height="194"
                      image={selectedFile}
                      alt="post img"
                    />
                    <CardContent
                      className={classes.recommendedPostsCardContent}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {message.length > 150
                          ? message.substring(0, 150) + "..."
                          : message}
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      Likes: {likes.length}
                    </CardActions>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;
