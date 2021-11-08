import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import AppNav from "../../components/nav";
import Footer from "../../components/footer";
import db from "../../config/firebase";
import { onSnapshot, collection, addDoc } from "@firebase/firestore";
import Loader from "../../components/loader";
// import "firebase/database";

const CreateArticle = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");
  const [img, setImg] = useState("")
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(articles);

  useEffect(() => {
    onSnapshot(collection(db, "articles"), (snapshot) =>
      setArticles(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  // const articleRef = firebase.database().ref('Articles')

  const onSubmit = async () => {
    setLoading(true);
    const collectionRef = collection(db, "articles");
    const payload = {
      content: value,
      title,
      preview,
      img,
      created_at: new Date(),
    };
    const docRef = await addDoc(collectionRef, payload);
    if (docRef.id) setLoading(false);
  };

  return (
    <>
      <AppNav />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container my-4">
            <div className="row">
              <div className="col-lg-7 col-md-8">
                <h3 className="fw-700 fs-3 mb-3">Manage Article</h3>
                <form>
                  <div className="form-group mb-3">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">Preview text</label>
                    <input
                      type="text"
                      className="form-control"
                      value={preview}
                      onChange={(e) => setPreview(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">Image link</label>
                    <input
                      type="text"
                      className="form-control"
                      value={img}
                      onChange={(e) => setImg(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="form-label">Content</label>
                    <ReactQuill
                      theme="snow"
                      value={value}
                      onChange={setValue}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>

              <div className="col-lg-5 col-md-8">
                <h4 className="fw-600 fs-4 mb-3">All Article</h4>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
export default CreateArticle;
