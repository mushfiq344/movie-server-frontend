import React, { useState, useEffect } from "react";


export default function Index() {

  const [url, setUrl] = useState("http://127.0.0.1:8000/api/movies");
  const changeUrl = async (newUrl) => {
    console.log("new url", newUrl);
    await setUrl(newUrl);
  }
  let passingUrl;
  passingUrl = url;
  console.log("passign url:", passingUrl);
  return (

    <div>Add Movie List Here</div>

  )

}
