import { useEffect, useState } from "react";

export default function Content() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = title;
  });

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.title)} />
    </div>
  );
}
