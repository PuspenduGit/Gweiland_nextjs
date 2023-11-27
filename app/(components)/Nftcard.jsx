"use client";
import * as React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Link from "next/link";
const Nftcard = ({ nftimage, nfttitle, nfcolor }) => {
  return (
    <div>
      <Card
        sx={{ maxWidth: 500 }}
        style={{
          backgroundColor: nfcolor,
          height: 150,
          width: 350,
          borderTopLeftRadius: 75,
          borderBottomLeftRadius: 75,
        }}>
        <CardHeader
          avatar={
            <Image
              src={nftimage}
              alt="Vercel Logo"
              width={130}
              height={70}
              className="rounded-full"
            />
          }
          style={{
            color: "#FFFFFF",
            position: "relative",
            // left: 200,
          }}
          // title={nfttitle}
        ></CardHeader>
        <CardContent
          style={{
            color: "#FFFFFF",
            textDecoration: "underline",
            position: "relative",
            left: 132,
            bottom: 155,
            width: "65%",
          }}>
          <p className="float-right flex-col relative right-3">
            <div className="text-2xl font-weight-600 font-sans"
            >{nfttitle}</div>
            <div
              style={{
                float: "right",
                paddingTop: "40px",
                textDecoration: "underline",
              }}
            >shop now</div>
          </p>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
    </div>
  );
};

export default Nftcard;
