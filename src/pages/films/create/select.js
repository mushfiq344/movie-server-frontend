import React, { useState } from 'react';

import Select from 'react-select';

const GenreSelect = (props) => {
    const [selectedGenre, setSelectedGenre] = useState([])
    const options = [
        { value: 'Action', label: 'Action' },
        { value: 'Horror', label: 'Horror' },
        { value: 'Animation', label: 'Animation' }

    ]

    const newGenre = (e) => {

        props.handleGenres(e);
    }
    return (

        < Select
            onChange={(e) => newGenre(e)}
            defaultValue={[options[0]]}
            isMulti
            name="genre"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            required />
    )
};

export { GenreSelect };