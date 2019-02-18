import React, { useState } from "react";

function CreateLink() {
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  return (
    <div>
      <div className="flex flex-column mt3">
        <input
          className="mb2"
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="text"
          placeholder="A description for the link"
        />
        <input
          className="mb2"
          value={url}
          onChange={e => setUrl(e.target.value)}
          type="text"
          placeholder="The URL for the link"
        />
        <button onClick={`... you'll implement this soon`}>Submit</button>
      </div>
    </div>
  );
}

export default CreateLink;
