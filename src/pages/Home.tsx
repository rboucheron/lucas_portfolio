import { Header } from "../components/Header.tsx";
import Project from "../components/Project.tsx";
const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-gray to-white mt-10">
        < Project />
      </div>
    </>
  );
};

export default Home;
