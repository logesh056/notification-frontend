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
    let url = BASE_URL + "/post/stream" + "?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJhcGk6Ly9mOTJkZGIwNS1iNzVjLTQ0NTktOTEwZi03M2M1OGQ3NWY1ZjUiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9iNGQzNGU0Mi03OWE2LTQ3OGUtYjNhZi0xMmNlNzMxMWZhMDkvIiwiaWF0IjoxNzAxMDgyNTU5LCJuYmYiOjE3MDEwODI1NTksImV4cCI6MTcwMTA4Nzg2MywiYWNyIjoiMSIsImFpbyI6IkFUUUF5LzhWQUFBQXhmZDhWZkxKeWUyaGU1dStlTTUrSi9BU2FSQU4vWTFDVyszQmxLbGFDZm5XazZGeUE0L2c3QWJmZjRpSTgrRGMiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiZjkyZGRiMDUtYjc1Yy00NDU5LTkxMGYtNzNjNThkNzVmNWY1IiwiYXBwaWRhY3IiOiIxIiwiaXBhZGRyIjoiMjAuNzIuMTMyLjE5NCIsIm5hbWUiOiJsb2dlc2giLCJvaWQiOiI3YTExNWEzZS01NDUyLTQxNzktODc4NC1jZDczMjQxZTMyZWMiLCJyaCI6IjAuQWJjQVFrN1R0S1o1amtlenJ4TE9jeEg2Q1FYYkxmbGN0MWxFa1E5enhZMTE5ZlhKQUg4LiIsInJvbGVzIjpbIkFETUlOIl0sInNjcCI6ImVuY2lwaGVyaGVhbHRoLW11bHRpdGVuYW50LnNjb3BlIiwic3ViIjoidHkzRmt1Y0Q5Z2xFQ3hVX1lvNjBUYVFlcVNvcmxucmIzNjFUT3FsZXNUTSIsInRpZCI6ImI0ZDM0ZTQyLTc5YTYtNDc4ZS1iM2FmLTEyY2U3MzExZmEwOSIsInVuaXF1ZV9uYW1lIjoibG9nZXNoMDFAZW5jaXBoZXJoZWFsdGgub25taWNyb3NvZnQuY29tIiwidXBuIjoibG9nZXNoMDFAZW5jaXBoZXJoZWFsdGgub25taWNyb3NvZnQuY29tIiwidXRpIjoiRFljS1p4TVMzME8ySlF1cHp3dEtBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.j9kc8JN6xDzREm-l8uNgR-58Ngz8FnFRao1-IN48_goPyH7bnIXTOZoxrmK73_myBwtKh9Vj_FBsjBkp7OiYq3Op3cCvtZL3kJmCjmJEZD2XVQ8TwuqivGVvnb81JI_HvoTKPWENzAyqcfoTIfAuErSSZQE2pyG-iikzZno2ek2xFSf1Gytm7fcpn2BSNXJnJ9NYscqNo2o-1gav175cQax4DSodL1daCzMIEXx7MsBF4m3TsfNVAOIQZnuKbtN3XHR0dhTxd74exqnpEflGOWVLzRoz2_zv34Y2YHaqrshVIHOeHdaNq473QdsEoB4T0A6JV4vLa7vTo_Jkjgavxg";
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
