import React, { useEffect, useState } from "react";

function GithubApi() {
  const [gitHubData, setGitHubData] = useState(" ");

  const fetchData = () => {
    fetch("https://api.github.com/users/pandit2512")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setGitHubData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>
        {gitHubData.name}
        {gitHubData.login}
      </h1>

      <p>Follower Count: {gitHubData.followers}</p>
      <p>Following Count: {gitHubData.following}</p>
      <img src={gitHubData.avatar_url} alt="" />
    </div>
  );
}

export default GithubApi;
