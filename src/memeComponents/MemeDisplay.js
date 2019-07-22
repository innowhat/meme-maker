import React from "react";

function MemeDisplay(props) {
  return (
    <div className="jumbotron bg-info">
      <div className="container">
        <div className="row ">
          <div className="col-lg-8 mb-2">
            <div className="card">
              <h3 className="card-header text-muted">Meme Image</h3>
              <div className="row card-body">
                <div id="my-meme" className="vnicornMeme">
                  <img
                    src={props.data.randomImg}
                    className="img-fluid img-thumbnail rounded border-info"
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
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <h4 className="card-header text-muted">Meme Information</h4>
              <div className="row card-body">
                <form>
                  <div className="shadow-lg p-3 mb-3 bg-white rounded">
                    <p className="text-muted">Add image</p>
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
                          className="custom-file-label border-info"
                          for="inputGroupFile04"
                        >
                          Choose local image
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="shadow-lg p-3 mb-3 bg-white rounded">
                    <p className="text-muted">Add details</p>
                    <input
                      className="form-control border-info mb-2"
                      type="text"
                      name="topText"
                      placeholder="Top phrase"
                      value={props.data.topText}
                      onChange={props.handleChange}
                    />
                    <input
                      className="form-control border-info"
                      type="text"
                      name="bottomText"
                      placeholder="Bottom phrase"
                      value={props.data.bottomText}
                      onChange={props.handleChange}
                    />
                  </div>

                  <div className="shadow-lg p-3 mb-3 bg-white rounded">
                    <p className="text-muted">Add author</p>
                    <input
                      className="form-control border-info"
                      type="text"
                      name="authorText"
                      placeholder="Author info"
                      value={props.data.authorText}
                      onChange={props.handleChange}
                    />
                  </div>

                  <div className="shadow-lg p-3 mb-3 bg-white rounded text-center">
                    <div
                      className="btn-group btn-group-md "
                      role="group"
                      aria-label="Download type"
                    >
                  {/*     <button
                        type="button"
                        s
                        className="btn btn-outline-info"
                        onClick={props.handlePng}
                      >
                        Download PNG
                      </button> */}
                      <button
                        type="button"
                        className="btn btn-outline-info"
                        onClick={props.handleJpeg}
                      >
                        Download meme
                      </button>
                      
                    </div>
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
