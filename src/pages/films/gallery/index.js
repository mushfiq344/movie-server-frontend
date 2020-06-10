import React, { useState, useEffect } from "react";
import MovieList from "./movieList";
import { localHost, remoteServer } from "../../../variables";
export default function Index() {

  const [url, setUrl] = useState(remoteServer + "movies");
  const changeUrl = async (newUrl) => {
    console.log("new url", newUrl);
    await setUrl(newUrl);
  }
  let passingUrl;
  passingUrl = url;
  console.log("passign url:", passingUrl);
  return (

    <MovieList url={passingUrl}></MovieList>

  )

}
