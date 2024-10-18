"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>();

  const getData = async () => {
    await axios
      .get("https://api.quotable.io/quotes/random")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
    console.log("first");
  }, []);

  return (
    <div className="flex w-full h-full p-10 justify-center items-center flex-row flex-wrap">
      <div className="flex max-sm:w-auto flex-col border-gray-300 border-2 px-0 rounded-lg flex-wrap py-0 h-full items-center justify-center bg-slate-50">
        <span className="flex p-2 w-full italic text-justify">
          "{data ? data[0]?.content : ""}"
        </span>
        <span className="flex p-2 w-full">
          <span className="flex justify-start w-full">
            <button
              className="fa-solid fa-rotate"
              onClick={async () => await getData()}
            ></button>
          </span>
          <span className="flex w-full justify-end text-justify">
            - {data ? data[0]?.author : ""}
          </span>
        </span>
      </div>
    </div>
  );
}
