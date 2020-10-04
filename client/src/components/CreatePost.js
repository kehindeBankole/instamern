import React, { useState , useEffect} from "react";

function CreatePost() {
  const [post, setPost] = useState({ title: "", body: "" });
  const [img, setImg] = useState("");
  const[url , setUrl]=useState()
  // const history = useHistory()
  // const context = useContext(UserContext)
  function handleChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }
  function postDetails(e) {
    e.preventDefault()
    const formData = new FormData();

    formData.append("file", img);
    formData.append("upload_preset" , "instamern");
    formData.append("cloud_name", "kehindebankole");

    fetch("https://api.cloudinary.com/v1_1/kehindebankole/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        // console.log(result.url)
        // setUrl(result.url)
          fetch('/api/post', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          title : post.title,
          body:post.body,
          photo:result.url
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log( data);
      })
      .catch((error) => {
        console.error(error);
      });
      })
      .catch((error) => {
       console.error("Error:", error);
      console.log(error)
      });
      // console.log(img)
      //
      //
      //
      //
      //
      // fetch('/api/post', {
      //   method: 'POST', // or 'PUT'
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${localStorage.getItem("token")}`
      //   },
      //   body: JSON.stringify({
      //     title : post.title,
      //     body:post.body,
      //     photo:url
      //   }),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log( data);
      // })
      // .catch((error) => {
      //   console.error(error);
      // });

  }

  // useEffect((e) => {
  //    postDetails(e)
  // }, [])
  return (
    <div>
      {url}
      <div>
        <form>
          <div className="form-group">
            <label className="col-form-label" htmlFor="title">
              title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              className="form-control form-control-lg"
              id="title"
              placeholder="please enter name"
              value={post.title}
            />
          </div>
          <div className="form-group">
            <label className="col-form-label" htmlFor="body">
              body
            </label>
            <input
              type="text"
              name="body"
              onChange={handleChange}
              className="form-control form-control-lg"
              id="body"
              placeholder="please enter email"
              value={post.body}
            />
            <input
              type="file"
              name="image"
              onChange={(e) => setImg(e.target.files[0])}
              className="form-control form-control-lg"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={postDetails}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
