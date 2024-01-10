import React from "react";
import "./Couture.css";
import { Icon } from "@mui/material";
import { Link } from "react-router-dom";
import ClothingItem from "../../components/Clothing/Clothing";
import { clothing } from "../../../data";

function Couture() {
  return (
    <div className="body-couture">
      <video className="video-logo" muted autoPlay loop>
        <source
          src="https://res.cloudinary.com/dfwcnoezy/video/upload/v1704453693/ZARA/logo_ctzo7p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="row-0">
        <ClothingItem item={clothing[0]} index={0} />

        <video className="video-1" muted autoPlay loop height="100%">
          <source
            src="https://res.cloudinary.com/dfwcnoezy/video/upload/v1704451705/ZARA/Screen_Recording_2024-01-04_at_13.32.00_hmypx9.mov"
            type="video/mp4"
          />
        </video>
      </div>

      <ClothingItem item={clothing[1]} index={1} />

      <div className="row-1">
        <img
          width="100%"
          className="image-atelier-1"
          src="https://res.cloudinary.com/dfwcnoezy/image/upload/v1704732327/ZARA/5811350800_6_5_1_txi0oh.jpg"
        />
        <img
          className="image-atelier-2"
          src="https://i.pinimg.com/564x/f1/13/87/f1138785a276415b7a28d46fec055493.jpg"
        />
      </div>

      <div className="row-3">
        <ClothingItem item={clothing[2]} index={2} />
        <ClothingItem item={clothing[3]} index={3} />
      </div>

      <div className="row-4">
        <img
          className="suit-buttons"
          src="https:static.zara.net/photos/2023/I/0/1/p/2753/341/800/2/w/850/2753341800_6_3_1.jpg?ts=1696932965251"
        />
      </div>
    </div>
  );
}

export default Couture;