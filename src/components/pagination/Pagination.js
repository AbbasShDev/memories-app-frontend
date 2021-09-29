import React from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link } from "react-router-dom";
import makeStyles from "./styles";

const Paginate = () => {
  const classes = makeStyles();

  return (
    <Pagination
      classes={{ ul: classes.ul }}
      count={5}
      page={1}
      variant="contained"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts/page=${1}`} />
      )}
    />
  );
};

export default Paginate;
