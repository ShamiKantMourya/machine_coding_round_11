import {toast} from "react-hot-toast";

export const addWatchlist = () => {
  toast("Added to watchList", {
    style: {
      fontSize: "14px",
      borderRadius: "10px",
      background: "gray",
      color: "whitesmoke",
    },
  });
};
export const removeWatchlist = () => {
  toast("Remove from watchlist", {
    style: {
      fontSize: "14px",
      borderRadius: "10px",
      background: "red",
      color: "whitesmoke",
    },
  });
};
export const addStarred = () => {
  toast("Added to Starred", {
    style: {
      fontSize: "14px",
      borderRadius: "10px",
      background: "gray",
      color: "whitesmoke",
    },
  });
};
export const removeStarred = () => {
  toast("Remove From Starred", {
    style: {
      fontSize: "14px",
      borderRadius: "10px",
      background: "red",
      color: "whitesmoke",
    },
  });
};

