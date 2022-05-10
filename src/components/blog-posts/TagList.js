import React, { Fragment } from "react";
import { GatsbyLink } from "gatsby-link";
import { kebabCase } from "lodash"
const TagList = ({ tags }) => {
  return (
    <Fragment>
      {tags.map((tag) => (
        <GatsbyLink key={tag}
           to={`/tags/${kebabCase(tag)}`}>
        <div
          key={tag}
          className="rounded-full px-2 py-1 uppercase
            text-xs bg-blue-600 text-white"
        >
          <p>{tag}</p>
        </div>
        </GatsbyLink>
      ))}
    </Fragment>
  );
};
export default TagList