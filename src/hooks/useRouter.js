import {useContext} from "react";
import {RouterContext} from "../routes/CustomBrowserRouter";

const useRouter = () => (useContext(RouterContext));

export default useRouter;
