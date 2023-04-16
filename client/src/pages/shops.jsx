import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLocalShops } from "../redux/shops";

const Shops = () => {
  const dispatch = useDispatch();
  const shops = useSelector((state) => state.shops);

  useEffect(() => {
    dispatch(fetchLocalShops());
  }, [dispatch]);

  const page = (
    <div>
      <h1>Shops</h1>
      <ul>
        {shops.map((shop) => (
          <li key={shop.id}>{shop.name}</li>
        ))}
      </ul>
    </div>
  );
  return page;
};

export default Shops;
