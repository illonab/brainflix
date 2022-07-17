import "./Upload.scss";
import uploadVideo from "../../assets/images/upload-video-preview.jpg";

function Upload(props) {
  console.log(props);
  const successResponse = () => {
    alert("The video uploaded successfully");
    props.history.push("/");
  };

  return (
    <section className="upload">
      <div className="upload__wrapper">
        <h1 className="upload__title">Upload video</h1>
        <form className="upload__form" action="" onSubmit={successResponse}>
          <div className="upload__underline">
            <div className="upload__thumbnail">
              <p className="upload__label">VIDEO THUMBNAIL</p>
              <img src={uploadVideo} alt="" className="upload__image" />
            </div>
            <div className="upload__top">
              <label className="upload__label">
                TITLE YOUR VIDEO
                <input
                  type="text"
                  className="upload__new-title"
                  name="title"
                  placeholder="Add a title to your video"
                />
              </label>
              <label className="upload__label">
                ADD A VIDEO DESCRIPTION
                <textarea
                  type="text"
                  className="upload__description"
                  name="description"
                  placeholder="Add a description to your video"
                ></textarea>
              </label>
            </div>
          </div>
          <div className="upload__bottom">
            <input
              className="upload__publish cta-btn"
              type="submit"
              name="submit"
              value="Publish"
            />
            <button className="upload__calcel cta-btn">Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Upload;
