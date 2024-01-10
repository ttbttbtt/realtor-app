import React, { useState } from "react";
import { StyledPost } from "./Post.style";
import { useNavigate } from "react-router-dom";

interface IPostProps {
  isLiked?: boolean;
  isMarked?: boolean;
  postText: string;
  userName: string;
  regDate: string;

  photos1: string;
  photos2: string;

  line: string;
  list_price: string;
}

export const Post = ({
  isLiked,
  isMarked,
  postText,
  userName,
  regDate,
  photos1,
  photos2,

  line,
  list_price,

}: IPostProps) => {
  const navigate = useNavigate();
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const nextPage = () => {
    navigate("/one", { state: { id: userName } });
  };

  const toLikes = () => {
    // @ts-ignore
    let Likes = JSON.parse(localStorage.getItem("Likes")) || []
    if ( ! Likes.includes(userName) ) {
      Likes.push(userName)
      console.log('Likes', Likes)
      localStorage.setItem('Likes',JSON.stringify(Likes))
    }
  };

  const delFromLikes = () => {
    // @ts-ignore
    let Likes = JSON.parse(localStorage.getItem("Likes")) || []
    if ( Likes.includes(userName) ) {
      let index = Likes.indexOf(userName);
      Likes.splice(index, 1);
      console.log('Likes', Likes)
      localStorage.setItem('Likes',JSON.stringify(Likes))
    }
  };

  return (
    <StyledPost $isLiked={isLiked} $isMarked={isMarked}>
      <div className="updLikes">
        <button type="button" onClick={toLikes}>Добавить в Избранное</button>
        <button type="button" onClick={delFromLikes}>Удалить из Избранного</button>
      </div>

      {/* ----- Фото1, Фото2, id, Бренд, Год постройки ----- */}
      <div onClick={nextPage}>
        <img src={photos1} alt="Здесь должно быть Фото1" />
        <img src={photos2} alt="Здесь должно быть Фото2" />
        <p className="Post__text">id: {userName}</p>
        <p className="Post__text">Бренд: {postText}</p>
        <p className="Post__text">Год постройки: {regDate}</p>

        <p className="Post__text">Адрес: {line}</p>
        <p className="Post__text">Цена: {list_price}</p>

      </div>
    </StyledPost>
  );
};
