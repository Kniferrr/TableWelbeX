import getData from "../../http/servises/getData";
import { setData,ERROR } from "../../Store/redusers/table";

export const LoginActionCreater = async () => {
    const res = await getData.fetchData();
  return async (dispatch) => {
      res.then((data) => {
        dispatch(setData(data));
      }).catch(()=>{
        dispatch(ERROR());
      });
  };
};
