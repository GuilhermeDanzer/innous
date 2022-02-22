import React, { useState } from "react"
import "./App.css"
import albums from "./albums.json"

function App() {
  const [showAlbums, setShowAlbums] = useState(false)
  const [albumsToShow, setAlbumsToShow] = useState(albums)

  return (
    <div className="App">
      {showAlbums ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              paddingTop: 20,
            }}>
            <button
              className="dark-theme-button"
              onClick={() => setAlbumsToShow(albums)}>
              All
            </button>
            <button
              className="dark-theme-button"
              onClick={() =>
                setAlbumsToShow(
                  albums.filter(album => album.source === "LOCAL")
                )
              }>
              Local
            </button>
            <button
              className="dark-theme-button"
              onClick={() =>
                setAlbumsToShow(
                  albums.filter(album => album.source === "QOBUZ")
                )
              }>
              QOBUZ
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              padding: 5,
              width: "100%",
            }}>
            {albumsToShow.map(album => (
              <div
                key={album.id}
                style={{
                  width: 350,
                  height: 350,
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  flex: " 1 1 auto",
                  margin: 0,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <h4 style={{ color: "#EEEEEE" }}>{album.album}</h4>
                <div style={{ position: "relative" }}>
                  <img
                    style={{ width: "200px", height: "200px" }}
                    src={
                      album.cover
                        ? require(`./assets/covers/${album.cover}`)
                        : require("./assets/images/undefined_album_cover.png")
                    }
                    alt="album cover"
                  />

                  {album.source === "QOBUZ" ? (
                    <img
                      style={{
                        width: "20px",
                        height: "20px",
                        position: "absolute",
                        bottom: "5px",
                        right: "0px",
                      }}
                      src={require("./assets/images/qobuz.png")}
                      alt="album cover"
                    />
                  ) : null}
                </div>
                <p style={{ color: "#EEEEEE" }}>{album.artist}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <button onClick={() => setShowAlbums(true)}>Show Albums</button>
        </div>
      )}
    </div>
  )
}

export default App
