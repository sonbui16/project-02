import { useEffect, useState } from "react";
import { Link } from "react-router";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="">
      <h1 className="">Danh sách</h1>
      <ul className="">
        {data.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/posts/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Home;
