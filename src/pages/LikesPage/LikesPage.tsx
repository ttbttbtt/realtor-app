import React, { useEffect } from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { Post } from "../../components/Post/Post";
import {
  useLazyGetPostListQuery,
  useSearchAllMutation,
} from "../../store/API/postApi";
import { Heading } from "../../components/Typografy/Heading";

// @ts-ignore
let Likes = JSON.parse(localStorage.getItem("Likes")) || []

export const LikesPage = () => {
  let [searchAll, { data }] = useSearchAllMutation();

  const getAll = () => {
    searchAll({});
  };

  useLazyGetPostListQuery();
  useEffect(() => {
    console.log("data", data);
  });

  return (
    <Container>
      <div className="MainPage">

        <Heading headingText="Избранное" />

        <div className="nav">
          <div><a href="./">Логин</a></div>
          <div><a href="./main">/ Главная</a></div>
          {/* <div><a href="./likes">/ Избранное</a></div> */}
        </div>

        {/* 30 попыток в месяц - работаем по кнопке */}
        <button onClick={getAll}>Нажмите для Рендера домов мечты</button>

        <main className="Main">
          {data?.home_search &&
            data.home_search?.results.length &&
            data.home_search.results.map((post: any) => (

              // FIX: если id есть в массиве localStorage. сделать наоборот. вынести на верхний уровень
              Likes.includes(post.property_id) &&
              <Post
                key={post.property_id}
                postText={post.branding[0].name}
                regDate={post.description.year_built}
                userName={post.property_id}
                photos1={post.photos[0].href}
                photos2={post.photos[1].href}

                line={post.location.address.line}
                list_price={post.list_price}
                
              />
            ))}
        </main>
      </div>
    </Container>
  );
};
