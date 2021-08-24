import React from "react"
import {LIKE_COMMENT} from "../actions/actionTypes"

const initialState = {
  panorama: {
    id: 1,
    photo: 'panorama',
    isPanorama: true,
    user: 'Анна',
    time: '5 минут',
    text: (<>
      Прыгать или нет? Напишите в <br className='mobile-only'/>
      комментарии свой совет и <br className='mobile-only'/>
      смотрите прямую <br className='tablet-only'/> трансляцию в <br className='mobile-only'/>
      перископе, задавайте свои вопросы!
    </>),
    likes: 215,
    isLiked: false
  },
  posts: [
    {
      id: 1,
      photo: 'car',
      isPanorama: false,
      user: 'Левон',
      time: '5 часов',
      text: 'Вчера он на луну летал, сегодня в руки к нам попал.',
      likes: 356,
      isLiked: false
    },
    {
      id: 2,
      photo: 'drums',
      isPanorama: false,
      user: 'Антон',
      time: '12 часов',
      text: 'Соседи будут рады!',
      likes: 666,
      isLiked: false
    },
    {
      id: 3,
      photo: 'sky',
      isPanorama: false,
      user: 'Борис',
      time: '20 часов',
      text: 'Здесь могла быть ваша цитата о высоком и вечном.',
      likes: 215,
      isLiked: false
    },
    {
      id: 4,
      photo: 'fair',
      isPanorama: false,
      user: 'Сергей',
      time: '25 часов',
      text: 'Самая кубанская в мире!',
      likes: 4,
      isLiked: false
    },
    {
      id: 5,
      photo: 'mountain',
      isPanorama: false,
      user: 'Максим',
      time: '40 часов',
      text: 'Где снег-то?',
      likes: 150,
      isLiked: false
    },
    {
      id: 6,
      photo: 'airplane',
      isPanorama: false,
      user: 'Надежда',
      time: '45 часов',
      text: 'Всем GM и взаимные лайки!',
      likes: 2560,
      isLiked: false
    }
  ],
  ranges: [
    {
      id: 1,
      name: 'crop',
      active: true,
      value: 86
    },
    {
      id: 2,
      name: 'fill',
      active: false,
      value: 13
    },
    {
      id: 3,
      name: 'contrast',
      active: false,
      value: 51
    }
  ]
}

const handlers = {
  LIKE_COMMENT: (state, {newPosts}) => ({...state, newPosts}),
  DEFAULT: state => state
}


export default function photosReducer(state = initialState, action) {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}