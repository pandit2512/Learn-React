import React, { useEffect, useState } from "react";

//Installed GitHub calender => npm install react-github-calendar

function GitHubProfile() {
  const [gitHubData, setGitHubData] = useState(" ");

  const [followers, setFollowers] = useState([]);

  const [following, setFollowing] = useState([]);

  const [repoName, setRepoName] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedYear, setSelectedYear] = useState("2025"); // Default year
  const fetchData = () => {
    fetch("https://api.github.com/users/pandit2512")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setGitHubData(data);

        // ====Fetching followers Data====
        fetch(data.followers_url)
          .then((followersData) => followersData.json())
          .then((followersData) => setFollowers(followersData));

        // ====Fetching followers Data====
        fetch(data.following_url)
          .then((followingData) => followingData.json())
          .then((followingData) => setFollowers(following));

        //===fetching Repos data=====
        fetch(data.repos_url)
          .then((repoName) => repoName.json())
          .then((repoName) => setRepoName(repoName));
      });
  };

  // List of available years for filtering
  const years = ["2021", "2022", "2023", "2024", "2025", "2026"];

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: 18 + "rem" }}>
              <img src={gitHubData.avatar_url} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{gitHubData.name}</h5>
                <p>Follower Count: {gitHubData.followers}</p>
                <p>Following Count: {gitHubData.following}</p>
              </div>
            </div>
          </div>
          <div class="col">
            Followers
            <input
              type="text"
              placeholder="Search Name"
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
            {followers
              .filter((follower) =>
                follower.login.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((follower, idx) => {
                return (
                  <li className="list-item" key={idx}>
                    {follower.login}
                  </li>
                );
              })}
            {/* ====================== */}
            Following:
            {followers.map((following, idx) => {
              return (
                <li className="list-item" key={idx}>
                  {following.login}
                </li>
              );
            })}
          </div>
          <div className="col">
            Repositories
            {repoName.map((repo, idx) => (
              <li className="list-item" key={idx}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <label htmlFor="yearFilter">Filter by Year: </label>
        <select
          id="yearFilter"
          //value={selectedYear}
          onChange={handleYearChange}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <img
        src="https://ghchart.rshah.org/pandit2512"
        alt="GitHub Contributions Chart"
      />

      {/* <img
        src={`https://ghchart.rshah.org/${selectedYear}/pandit2512`}
        alt="GitHub Contributions Chart"
      /> */}
    </div>
  );
}

export default GitHubProfile;
