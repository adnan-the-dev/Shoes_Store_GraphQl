import React from "react";
import {
    FallingLines,
  LineWave,
  Puff,
  Rings,
  ThreeDots,
  Triangle,
} from "react-loader-spinner";

export const Loader = () => {
  return (
    <>
      <LineWave
        visible={true}
        height="200"
        width="200"
        color="rgb(99 201 230)"
        ariaLabel="line-wave-loading"
        wrapperStyle={{}}
        wrapperClass=""
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
      {/* <Puff
        visible={true}
        height="50"
        width="50"
        color="rgb(99 201 230)"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /> */}

      {/* <Triangle
        visible={true}
        height="80"
        width="80"
        color="rgb(99 201 230)"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /> */}
      {/* <Rings
        visible={true}
        height="80"
        width="80"
        color="rgb(99 201 230)"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /> */}
      {/* <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="rgb(99 201 230)"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /> */}
      {/* <FallingLines
        color="rgb(99 201 230)"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      /> */}
    </>
  );
};
