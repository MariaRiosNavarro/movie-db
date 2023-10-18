import MovieList from "../components/MovieList";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <section className="center">
        <h1>My Movie db</h1>
        <MovieList />
      </section>
    </>
  );
};

export default Home;
