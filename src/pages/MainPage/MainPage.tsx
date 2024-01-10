import React, { useEffect } from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { Post } from "../../components/Post/Post";
import {
  useLazyGetPostListQuery,
  useSearchAllMutation,
} from "../../store/API/postApi";
import { Heading } from "../../components/Typografy/Heading";

export const MainPage = () => {
  let [searchAll, { data }] = useSearchAllMutation();

  // let raw = localStorage.getItem('allHomes');
  // if (raw !== undefined && raw != null) {
  //   data=JSON.parse(raw || '');
  // }

  const getAll = () => {
    // if (!data || data == null) {
    searchAll({});

    // }
  };
  // const { data, isLoading, isError } = useGetPostListQuery(null);
  //const [fetchTrigger, { data, isLoading, isError }] =
  useLazyGetPostListQuery();
  useEffect(() => {
    // console.log(data);
    // fetchTrigger(null);
    console.log("data", data);
  });

  return (
    <Container>
      <div className="MainPage">

        <Heading headingText="Главная" />

        <div className="nav">
          <div><a href="./">Логин</a></div>
          {/* <div><a href="./main">/ Главная</a></div> */}
          <div><a href="./likes">/ Избранное</a></div>
        </div>
        
        {/* <div><img src="./eternity.png" alt="Дом мечты" /></div> */}

        {/* 30 попыток в месяц - работаем по кнопке */}
        <button onClick={getAll}>Нажмите для Рендера всех домов</button>

        <main className="Main">
          {data?.home_search &&
            data.home_search?.results.length &&
            data.home_search.results.map((post: any) => (
              <Post
                key={post.property_id}
                postText={post.branding[0].name}
                regDate={post.description.year_built}
                userName={post.property_id}
                photos1={post.photos[0].href}
                photos2={post.photos[1].href}
                
              />
            ))}
        </main>
      </div>
    </Container>
  );
};
