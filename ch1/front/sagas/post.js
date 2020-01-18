
import { all ,fork,takeLatest,delay,put } from "redux-saga/effects"
import { ADD_POST_REQUEST,ADD_POST_SUCCESS,ADD_POST_FAILURE } from "../reducers/post";

function addPostAPI()
{

}
function* addPost()
{
    try{
        yield delay(2000);
        yield put({
            type:ADD_POST_SUCCESS,
        });
    }catch(e)
    {
        yield put({
            type: ADD_POST_FAILURE,
            error: e,

        })
    }
}

function* watchAddPost()
{
    yield takeLatest(ADD_POST_REQUEST,addPost);
}


function addCommentAPI()
{
    
}
function* addComment()
{
    try{
        yield delay(2000);
        yield put({
            type:ADD_COMMENT_SUCCESS,
        });
    }catch(e)
    {
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: e,

        })
    }
}

function* watchAddComment()
{
    yield takeLatest(ADD_COMMENT_REQUEST,addComment);
}

export default function* postSaga()
{
    yield all([
        fork(watchAddPost),
        fork(watchAddComment)

    ])
}