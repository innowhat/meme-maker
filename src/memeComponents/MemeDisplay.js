import React from "react";

function MemeDisplay(props) {
  return (
    <div className="jumbotron bg-info">
      <div className="container">
        <div className="row ">
          <div className="col-lg-8">
            <div className="card">
              <h3 className="card-header text-muted">Meme Image</h3>
              <div className="card-body">
                <div id="my-node" className="vnicornMeme">
                  <img
                    src={props.data.randomImg}
                    className="img-fluid img-thumbnail"
                    alt=""
                    width="100%"
                  />

                  <h2 className="topText">{props.data.topText}</h2>
                  <h2 className="bottomText">{props.data.bottomText}</h2>
                  <i className="authorText">
                    {props.data.authorText.length > 0 && (
                      <> @ {props.data.authorText} </>
                    )}
                  </i>
                </div>
              </div>
              <div className="card-footer text-muted">
                <div
                  className="btn-group btn-group-md"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    s
                    className="btn btn-secondary"
                    onClick={props.handlePng}
                  >
                    Download PNG
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark "
                    onClick={props.handleJpeg}
                  >
                    Download JPEG
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <h4 className="card-header text-muted">Meme Information</h4>
              <div className="card-body">
                <form>
                  <p>Add image</p>
                  <div className="shadow-lg p-3 mb-3 bg-white rounded">
                    <button
                      type="submit"
                      name="generateImage"
                      onClick={props.handleRandom}
                      class="btn btn-info btn-md btn-block"
                    >
                      {"Generate random web image"}
                    </button>
                    <br />
                    <p className="text-center small">OR</p>
                    <div className="input-group">
                      <div className="custom-file">
                        <input
                          onChange={props.handleUpload}
                          type="file"
                          className="custom-file-input"
                          id="inputGroupFile04"
                          aria-describedby="inputGroupFileAddon04"
                          accept="image/x-png,image/gif,image/jpeg"
                        />
                        <label
                          className="custom-file-label"
                          for="inputGroupFile04"
                        >
                          Choose local image
                        </label>
                      </div>
                    </div>
                  </div>

                  <p>Add details</p>
                  <div className="shadow-lg p-3 mb-3 bg-white rounded">
                    <input
                      className="form-control"
                      type="text"
                      name="topText"
                      placeholder="Top phrase"
                      value={props.data.topText}
                      onChange={props.handleChange}
                    />
                    <br />
                    <input
                      className="form-control"
                      type="text"
                      name="bottomText"
                      placeholder="Bottom phrase"
                      value={props.data.bottomText}
                      onChange={props.handleChange}
                    />
                  </div>
                  <p>Add author</p>
                  <div className="shadow-lg p-3 mb-3 bg-white rounded">
                    <input
                      className="form-control"
                      type="text"
                      name="authorText"
                      placeholder="Author info"
                      value={props.data.authorText}
                      onChange={props.handleChange}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemeDisplay;
