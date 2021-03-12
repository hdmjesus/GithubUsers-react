import React, { useState, useEffect } from "react";
import { getUrlUser } from "../../services/getUsers/getUsers";
import RepositoriesDetail from "./RepositoriesDetail";

const UserDetail = (props) => {
  const [Followers, setfollowers] = useState();
  const [Followigs, setFollowigs] = useState();
  const [Repositories, setRepositories] = useState();

  const { id, login, avatar_url, url, repos_url } = props;

  useEffect(() => {
    getUrlUser(login, "followers").then((value) => setfollowers(value.length));
    getUrlUser(login, "following").then((value) => setFollowigs(value.length));
    getUrlUser(login, "repos").then((value) => setRepositories(value));
  }, [login]);

  return (
    <section className="user md:flex ">
      <article className="user__datail w-4/5   mx-auto  h-80 md:w-2/6">
        <div className="bg-primaryBlue rounded-md my-5 p-5 mt-14 md:w-5/6 md:m-auto md:mt-12 md:min-h-3/4">
          <figure className="w-3/5 my-8 mx-auto">
            <img
              className="rounder w-full rounded-full"
              src={avatar_url}
              alt={login}
            />
          </figure>
          <div className="text-center">
            <p className="text-3xl capitalize">{login}</p>
            <p className="text-sm">{Followers} Followers</p>
            <p className="text-sm">{Followigs} Followings</p>
          </div>
        </div>
      </article>

      <article className="user__repositories md:w-4/6">
        <h2 className="text-white text-lg font-bold p-5">
          Popular Repositories
        </h2>
        <ol className="repositories w-4/5 m-auto md:flex md:flex-wrap md:w-11/12">
          {Repositories &&
            Repositories.map((value, i) => (
              <RepositoriesDetail key={value.id} {...value} />
            ))}
        </ol>
      </article>
    </section>
  );
};
export default UserDetail;
