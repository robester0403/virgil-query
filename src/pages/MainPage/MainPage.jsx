import React from "react";
import "./MainPage.scss";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../../utils/api/api";

const MainPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["get-photos"],
    queryFn: () => getData("/photos"),
  });

  return (
    <div className="image-gallery container">
      <div className="image-gallery header">
        MainPage
        <button className="image-gallery load-button">Load Images</button>
      </div>

      <div className="image-gallery images">
        {isLoading && <div className="image-gallery loading">Loading...</div>}
        {error && <div className="image-gallery error">{error.message}</div>}
        {data &&
          data.map((image) => (
            <div className="image-gallery image" key={image.id}>
              <img src={image.thumbnailUrl} alt={image.title} />
              <div className="image-gallery image-title">{image.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainPage;
