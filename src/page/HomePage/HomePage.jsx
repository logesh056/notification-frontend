import React, { useEffect, useState } from "react";
import { createPost, getAllPosts } from "../../api/apiCalls";
import CreatePostComponent from "../../components/CreatePostComponent/CreatePostComponent";
import PostListComponent from "../../components/PostListComponent/PostListComponent";
import { useSelector } from "react-redux";
import "./HomePage.css";
import { NavbarComponent } from "../../components/NavbarComponent/NavbarComponent";
import { FiRefreshCw } from "react-icons/fi";
import { BASE_URL } from "../../constants";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  const user = useSelector((state) => state.auth.value.user);

  useEffect(() => {
    let url = BASE_URL + "/post/stream" + "?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJhcGk6Ly9mOTJkZGIwNS1iNzVjLTQ0NTktOTEwZi03M2M1OGQ3NWY1ZjUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iNGQzNGU0Mi03OWE2LTQ3OGUtYjNhZi0xMmNlNzMxMWZhMDkvIiwiaWF0IjoxNzAyOTA1MjM0LCJuYmYiOjE3MDI5MDUyMzQsImV4cCI6MTcwMjkwOTE1MiwiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhWQUFBQTFJbUQ3d3NhR050TEhrUjFtc0ttdWY0TERUSzhwOXA2R2tyZUowc2FsbEh2dURvc0FwQ2JzSy9CZ2lEQUdDVEUiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiZjkyZGRiMDUtYjc1Yy00NDU5LTkxMGYtNzNjNThkNzVmNWY1IiwiYXBwaWRhY3IiOiIxIiwiaXBhZGRyIjoiMjAuNzIuMTMyLjE5NCIsIm5hbWUiOiJsb2dlc2giLCJvaWQiOiI3YTExNWEzZS01NDUyLTQxNzktODc4NC1jZDczMjQxZTMyZWMiLCJyaCI6IjAuQWJjQVFrN1R0S1o1amtlenJ4TE9jeEg2Q1FYYkxmbGN0MWxFa1E5enhZMTE5ZlhKQUg4LiIsInJvbGVzIjpbIkFETUlOIl0sInNjcCI6ImVuY2lwaGVyaGVhbHRoLW11bHRpdGVuYW50LnNjb3BlIiwic3ViIjoidHkzRmt1Y0Q5Z2xFQ3hVX1lvNjBUYVFlcVNvcmxucmIzNjFUT3FsZXNUTSIsInRpZCI6ImI0ZDM0ZTQyLTc5YTYtNDc4ZS1iM2FmLTEyY2U3MzExZmEwOSIsInVuaXF1ZV9uYW1lIjoibG9nZXNoMDFAZW5jaXBoZXJoZWFsdGgub25taWNyb3NvZnQuY29tIiwidXBuIjoibG9nZXNoMDFAZW5jaXBoZXJoZWFsdGgub25taWNyb3NvZnQuY29tIiwidXRpIjoiMkx5SzdrUE1kVUM4WU1RSGh3cTZBQSIsInZlciI6IjEuMCJ9.Y4K6xoba_mKCrWRHz3eA2UtGjI8qoggFb3g8AoCt8waBX2MIjKvI5HeLqzsE7dVV7kdgORfmQPQsV30P9WV8Bf45Zs99E70p7kRSwR7N82iiy-oVjcM8b0JPtsIP-sXZsae6mHyOO58iGFE6hJlkytc7VYpbGF23gRL5vtBLbnBLJ6h-WNZ1fHE4ztGkO5WBnGTbpapFYRF2qAfIIKw-35mYLTHvvthXy_NT1Y40tHKxodFuKFi2-chH01NACaXBlTgudDv05yxOa5MVOtpSYkOHgZgFQ__9Gcwm4HfJs0zcUugjqipbpgYGrJZMpIlkV0dIVbRrLciE_2Z3oXVXpg";
    const sse = new EventSource(url);

    sse.addEventListener("post-list-event", (event) => {
      const data = JSON.parse(event.data);
      setPosts(data);
    });

    sse.onerror = () => {
      sse.close();
    };
    return () => {
      sse.close();
    };
  }, []);

  // useEffect(() => {
  //   loadAllPosts();
  // }, []);

  const createPostFunction = async () => {
    if (content != "") {
      await createPost({
        user,
        content,
      });
      setContent("");
      // loadAllPosts();
    } else {
      alert("Error!");
    }
  };

  // const loadAllPosts = async () => {
  //   try {
  //     const response = await getAllPosts();
  //     setPosts(response.data);
  //   } catch (error) {}
  // };

  return (
    <div className="homePage">
      <NavbarComponent />
      <CreatePostComponent
        createPostFunction={createPostFunction}
        content={content}
        setContent={setContent}
      />
      {/* <FiRefreshCw onClick={loadAllPosts} className="refresh" size={35} /> */}
      <PostListComponent posts={posts} activeUser={user} />
    </div>
  );
};

export default HomePage;
