import React from 'react';

type HeaderPropsTitle = {
    title: string
}
export  const Header = (props: HeaderPropsTitle) => {
    return (
        <div>{props.title}</div>
    );
};

