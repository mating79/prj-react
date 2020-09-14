import React from "react";

var TweetStateContext = React.createContext();
var TweetDispatchContext = React.createContext();

function TweetReducer(state, action) {
  switch (action.type) {
    case "SET_TWEET_TEXT":
      return { ...state, tweetText: action.payload };
      case "SET_hashTag_LIST":
      return { ...state, hashTags: action.payload };
    case "SET_TWEET_LIST":
      return { ...state, tweetList: action.payload };
    case "LIKE_TWEET":
      const tweetid = action.payload;
      const Foundindex = state.tweetList.findIndex(item => item._id === tweetid);
      if (Foundindex === -1)
        return state;
      return { ...state, tweetList:[...state.tweetList.slice(0,Foundindex),{...state.tweetList[Foundindex], likes : state.tweetList[Foundindex].likes +1},...state.tweetList.slice(Foundindex+1)] };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function TweetProvider({ children }) {
  var [state, dispatch] = React.useReducer(TweetReducer, {
    tweetText: '',
    tweetList: [],
    hashTags:[]
  });
  return (
    <TweetStateContext.Provider value={state}>
      <TweetDispatchContext.Provider value={dispatch}>
        {children}
      </TweetDispatchContext.Provider>
    </TweetStateContext.Provider>
  );
}

function useTweetState() {
  var context = React.useContext(TweetStateContext);
  if (context === undefined) {
    throw new Error("useTweetState must be used within a TweetProvider");
  }
  return context;
}

function useTweetDispatch() {
  var context = React.useContext(TweetDispatchContext);
  if (context === undefined) {
    throw new Error("useTweetDispatch must be used within a TweetProvider");
  }
  return context;
}

export { TweetProvider, useTweetState, useTweetDispatch, setTweetText, setTweetList, likeTweet ,sethashTagList};

// ###########################################################
function setTweetText(dispatch, tweetText) {
  dispatch({
    type: "SET_TWEET_TEXT",
    payload: tweetText
  });
}
function likeTweet(dispatch, id) {
  dispatch({
    type: "LIKE_TWEET",
    payload: id
  });
}
function setTweetList(dispatch, list) {
  dispatch({
    type: "SET_TWEET_LIST",
    payload: list
  });
}
function sethashTagList(dispatch, list) {
  dispatch({
    type: "SET_hashTag_LIST",
    payload: list
  });
}


