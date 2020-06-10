import React, { useState, useEffect } from "react";
import { Movie } from "./movie";


const SingleMovieIndex = (props) => {
    const { match: { params } } = props;
    return (
        <div>
            <Movie slug_name={params.slug_name}></Movie>

        </div>
    )
}

export { SingleMovieIndex }