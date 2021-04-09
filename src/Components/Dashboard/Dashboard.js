import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);

  return <div>Welcome {user.username || "Jane Doe"}</div>;
};

export default Dashboard;
