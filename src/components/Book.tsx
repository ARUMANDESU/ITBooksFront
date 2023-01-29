import React from 'react';

const Book = ({image,title}:{image:string,title:string}) => {
    return (
        <div>
            <img src={image} alt={title}/>
            <h4>{title}</h4>
        </div>
    );
};

export default Book;