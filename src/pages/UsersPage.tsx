import {UsersComponent} from "../components/UsersComponent.tsx";
import {Link} from "react-router-dom";

export const UsersPage = () => {
    return (
      <div>
          <Link to='http://localhost:5173/'>Back</Link>
          <UsersComponent/>
      </div>

    )

}