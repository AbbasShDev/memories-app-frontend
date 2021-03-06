import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxHeight: "600px",
    maxWidth: "360px",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "10px",
    flex: 1,
  },
  imageSection: {
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPostsCardContent: {
    [theme.breakpoints.up("md")]: {
      height: "100px",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  mainPaper: {
    padding: "20px",
    borderRadius: "15px",
  },
  commentsOuterContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      // alignItems: "center",
    },
  },
  commentsInnerContainer: {
    height: "200px",
    marginRight: "30px",
    overflowY: "auto",
    flex: "1",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
      flex: "0",
    },
  },
  writeCommentsContainer: {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
