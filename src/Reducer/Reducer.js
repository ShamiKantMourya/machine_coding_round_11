const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : []
};

const getWatchlist = getFromLocalStorage("watchList");
const getStarred = getFromLocalStorage("starred");

export const initial_state = {
  movie: [],
  watch_list: getWatchlist,
  star: getStarred,
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "add_to_watchlist":
      return {
        ...state,
        watch_list: [...state.watch_list, payload],
      };
    case "add_to_starred":
      return {
        ...state,
        star: [...state.star, payload],
      };
    default:
      return state;
  }
};
