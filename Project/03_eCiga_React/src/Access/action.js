import { productReducers } from "../Store/product";

export const fetchSingleProduct = () => {
  return async (dispatch) => {
    fetch("", {
      method: "GET",
    })
      .then((res1) => {
        if (res1.status !== 200) {
          throw new Error("에러 발생");
        }
        return res1.json();
      })
      .then((res2) => {
        // state에 넣어줘야 되나..?
        dispatch(
          productReducers.storeInState({
            product: res2.product,
          })
        );
      });
  };
};