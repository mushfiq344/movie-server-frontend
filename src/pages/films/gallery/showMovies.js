import React from "react";

const ShowMovies = (props) => {
    return (
        <div className="pagination row" >
            {props.items.map(item => (
                <div key={item.id} className={"ml-4 col-md-3 mt-4"}>
                    <div className="col-12" style={{ "textAlign": "center" }}>
                        <a href={`/films/${item.slug_name}`}>
                            <img width="200px" src={item.photo}></img>
                        </a>
                    </div>
                    <div className="col-12" style={{ "textAlign": "center" }}>
                        <a href={`/films/${item.slug_name}`}><h4>{item.name}</h4></a>
                    </div>
                </div>
            ))}
        </div>)
}

export { ShowMovies }