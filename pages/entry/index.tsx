import React from "react";
import { Inter } from "next/font/google";
import Spline from "@splinetool/react-spline";
import Wrapper from "@/components/spline/Wrapper";
import Content from "@/components/spline/Content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return [
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/tEhPDXUfCK9vxTpC/scene.splinecode"
      />
    </Wrapper>,
    <Content>
      <h1>Ahojte</h1>
    </Content>,
  ];
}
