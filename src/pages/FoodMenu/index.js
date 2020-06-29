import React from "react";
import client from "../../contentful";
import "./FoodMenu.css";

const FoodMenu = () => {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "food",
      })
      .then((entries) => {
        setPosts(entries.items);
      });
  }, []);

  return (
    posts &&
    posts.map((post, i) => {
      return (
        <div className="menu-item">
          <div className="menu-item-top">
            <h3> {post.fields.foodName} </h3>
            <p> {post.fields.price}</p>
          </div>
          <p className="ingredients"> {post.fields.ingredients}</p>
        </div>
      );
    })
  );
};

export default FoodMenu;
