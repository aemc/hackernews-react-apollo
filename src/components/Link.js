import React, { useState } from "react";

function Link() {
  const { link } = this.props;
  return (
    <div>
      <div>
        {link.description} ({link.url}
      </div>
    </div>
  );
}

export default Link;
