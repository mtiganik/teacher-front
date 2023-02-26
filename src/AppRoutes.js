import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home/Home";
import { AddPostCtx } from "./components/add_post/AddPostCtx";
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/lisa-kuulutus',
    element: <AddPostCtx />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
