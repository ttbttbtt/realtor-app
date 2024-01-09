import React, { useEffect } from "react";
import { Container } from "../../components/UI/Container/Container.style";
import { Post } from "../../components/Post/Post";
import {
  useLazyGetPostListQuery,
  useSearchOneMutation,
} from "../../store/API/postApi";

import { useLocation } from "react-router-dom";

export const OnePage = () => {
  let [searchOne, { data }] = useSearchOneMutation();
  const loc=useLocation();;
  

  // let raw = localStorage.getItem('oneHome');
 
  const getOne = () => {
    searchOne(loc.state.id);
  };

  useLazyGetPostListQuery();
  useEffect(() => {
    // console.log(data);
    console.log("data", data);
  });

  return (
    <Container>
      <div className="MainPage">

        
        {/* 30 попыток в месяц - экономим ))) работаем по кнопке */}
        <button onClick={getOne}>Рендер выбранного дома</button>

        <main className="Main">
          {data?.home &&
              <Post
                key={data.home.property_id}
                postText={data.home.branding[0].name}
                regDate={data.home.description.year_built}
                userName={data.home.property_id}
                photos1={data.home.photos[0].href}
                photos2={data.home.photos[1].href}
              />
            }
        </main>
      </div>
    </Container>
  );
};
