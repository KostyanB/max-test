import React from "react";
import styled from 'styled-components';
import formatDate from '../functions/formatDate';

const ItemWrapper = styled.li`
    margin-bottom: 10px;
    border-bottom: 1px dashed #4f4f4f;
    color: #4f4f4f;
    padding: 5px 0;
    text-align: justify;
    :last-of-type {
        margin-bottom: 0;
    }
`;
const Title = styled.h1`
    margin-bottom: 10px;
`;
const Link = styled.a`
    text-decoration: none;
    color: #4f4f4f;
    font-size: 1em;
    font-weight: bold;
    text-indent: 1.5em;
    display: block;
    :hover, :active {
        color: #813b3b;
    }
`;

const Item = ({params}) => {
const { title, url, author_fullname, created } = params;
    return (
        <ItemWrapper>
            <article>
                <Title>
                    <Link href={url}>{title}</Link>
                </Title>
                <p>Автор: {author_fullname ? author_fullname : 'не известен'}</p>
                <p>Опубликован: {formatDate(created)}</p>
            </article>
        </ItemWrapper>
    )
}
export default Item;