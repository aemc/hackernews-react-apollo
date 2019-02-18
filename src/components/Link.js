import React, { useState } from "react";

function Link(props) {
  const { link } = props;
  return (
    <div>
      {link.description} ({link.url}
    </div>
  );
}

export default Link;
