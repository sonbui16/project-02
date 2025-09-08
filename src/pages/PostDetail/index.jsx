import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";

function PostDetail() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => {
        if (!response.ok) {
          navigate("/");
          return;
        }
        return response.json();
      })
      .then((json) => setData(json));
  }, []);
  return <div>{data.title}</div>;
}

export default PostDetail;
