import postsList from "./data";
import Post from "./components/Post/Post";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  /// JSX - html in javascript
  console.log("postsList:", postsList);

  return (
    <div className="App">
      <SearchBar />
      {postsList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

export default App;
