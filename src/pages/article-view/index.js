import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import db from "../../config/firebase";
import { onSnapshot, collection, addDoc } from "@firebase/firestore";
import Loader from "../../components/loader";

const ArticleView = () => {
  const { title } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(article);

  useEffect(() => {
    setLoading(true);
    onSnapshot(collection(db, "articles"), (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setArticle(
        articles.filter((article) => {
         const titleRef = article.title.replace(/ /g, "_")
          return titleRef == title;
        })
      );
      setLoading(false);
    });
  }, []);

  console.log(title, "In view ");

  return (
    <>
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="">
            <div className="container pt-4 pb-5 px-3" data-aos="fade-up">
              <div className="section-details">
                <h3 className="fs-2 fw-700 mb-3">{article[0]?.title}</h3>
                <img
                  data-aos="zoom-in-up"
                  src={article[0]?.img}
                  className="article-img"
                  alt="..."
                />

                <div
                  className="mt-4 article-p text-break"
                  data-aos="fade-up"
                  dangerouslySetInnerHTML={{ __html: article[0]?.content }}
                />
                {/* {article[0]?.content} */}
                {/* </p> */}
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};
export default ArticleView;
