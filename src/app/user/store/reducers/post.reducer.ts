import { initialPostState, IpostState } from '../state/post.state';
import { PostActions, EPostActions } from '../actions/post.actions';



export function Postreducer(state = initialPostState, action: PostActions): IpostState {
    switch (action.type) {

        case EPostActions.GetPostsSuccess: {
            return {
                ...state,
                posts: action.payload
            }
        }

        case EPostActions.GetPostSuccess: {
            return {
                ...state,
                selectedPost: action.payload
            }
        }

        default:
            return state;
    }
}