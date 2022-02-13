import { handleAsyncActions, reducerUtils } from '../lib/asyncUtils';
import {
  GET_POST,
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  GET_POST_ERROR,
  GET_POST_SUCCESS,
} from '../_types/post_types';

const initState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
  // posts: {
  //   loading: false,
  //   data: null,
  //   error: null,
  // },
  // post: {
  //   loading: false,
  //   data: null,
  //   error: null,
  // },
};

export default function posts(state = initState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      const postsReducer = handleAsyncActions(GET_POSTS, 'posts');
      return postsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActions(GET_POST, 'post')(state, action);
    default:
      return state;
  }
}

// export default function posts(state = initState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: reducerUtils.loading(),
//       };
//     case GET_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: reducerUtils.success(action.payload), // action.posts -> action.payload 로 변경됐습니다.
//       };
//     case GET_POSTS_ERROR:
//       return {
//         ...state,
//         posts: reducerUtils.error(action.error),
//       };
//     case GET_POST:
//       return {
//         ...state,
//         post: reducerUtils.loading(),
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: reducerUtils.success(action.payload), // action.post -> action.payload 로 변경됐습니다.
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: reducerUtils.error(action.error),
//       };
//     default:
//       return state;
//   }
// }

// export default function posts(state = initState, action) {
//   switch (action.type) {
//     case GET_POSTS:
//       return {
//         ...state,
//         posts: {
//           loading: true,
//           data: null,
//           error: null,
//         },
//       };
//     case GET_POSTS_SUCCESS:
//       return {
//         ...state,
//         posts: {
//           loading: true,
//           data: action.posts,
//           error: null,
//         },
//       };
//     case GET_POSTS_ERROR:
//       return {
//         ...state,
//         posts: {
//           loading: true,
//           data: null,
//           error: action.error,
//         },
//       };
//     case GET_POST:
//       return {
//         ...state,
//         post: {
//           loading: true,
//           data: null,
//           error: null,
//         },
//       };
//     case GET_POST_SUCCESS:
//       return {
//         ...state,
//         post: {
//           loading: true,
//           data: action.post,
//           error: null,
//         },
//       };
//     case GET_POST_ERROR:
//       return {
//         ...state,
//         post: {
//           loading: true,
//           data: null,
//           error: action.error,
//         },
//       };
//     default:
//       return state;
//   }
// }
