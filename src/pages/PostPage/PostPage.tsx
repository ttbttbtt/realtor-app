import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/UI/Container/Container.style";
import { useSearchOneMutation } from "../../store/API/postApi";
import { Post } from "../../components/Post/Post";

export const PostPage = () => {
  //   const params = useParams();
  const { postId } = useParams();

  const [fetchTrigger, { data, isLoading, isError }] =
  useSearchOneMutation();

  //   console.log("params", params);

  useEffect(() => {
    if (postId) {
      // Вызов запроса
      fetchTrigger(postId);
    }
  }, [postId]);

  return (
    <Container>
      {isError && <h1>Произошла ошибка</h1>}
      {isLoading && <h1>Идёт загрузка...</h1>}
      {/* {data && <h1>Здесь находится Пост Номер: {postId}</h1>} */}
      {data && (
        <Post
        key={data.property_id}
        postText={data.branding[0].name}
        // regDate={post.list_date}
        // userName={post.status}
        regDate={data.description.year_built}
        userName={data.property_id}
        photos1={data.photos[0].href}
        photos2={data.photos[1].href}

        line={data.home.location.address.line}
        list_price={data.home.list_price}
        />
      )}
    </Container>
  );
};
