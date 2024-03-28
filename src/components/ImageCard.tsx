"use client";
import { Photo } from "@/type";
import React from "react";
import { TbCloudDownload } from "react-icons/tb";
import { useState } from "react";
import { saveAs } from "file-saver";
import Loading from "./Loading";
import Image from "next/image";
type Props = {
  photo: Photo;
};

export default function ImageCard({ photo }: Props) {
  return (
    <div className="relative transition-all overflow-hidden break-inside-avoid group hover:opacity-90 bg-black aspect-square rounded-md">
      <DownloadBtn photo={photo} />
      <div className="absolute truncate w-full text-sm text-neutral-200 hidden group-hover:flex bottom-0 left-0 p-2.5  bg-gradient-to-t from-black/80 to-transparent h-24 justify-end items-start flex-col gap-1">
        <h2>{photo.description}</h2>
        <p className="text-xs text-neutral-300">{photo.user.name}</p>
      </div>
      <Image
        className="w-full h-full max-w-full max-h-full object-cover"
        height={500}
        width={500}
        src={photo.urls.regular}
        alt="img"
      />
    </div>
  );
}

function DownloadBtn({ photo }: Props) {
  const [isDownloading, setIsDownloading] = useState(false);
  console.log(photo);
  async function downloadImage(imageUrl: string, imageName: string) {
    try {
      setIsDownloading(true);
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      saveAs(blob, `${imageName}.png`);
    } catch {
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <button
      onClick={() => downloadImage(photo.urls.full, photo.id)}
      className="bg-black/50 opacity-60 top-5 rounded-full hidden group-hover:block hover:opacity-100 hover:bg-black/80 right-5 absolute p-2 border transition-all duration-300"
    >
      {isDownloading ? (
        <Loading className="h-6 w-6" />
      ) : (
        <TbCloudDownload className="text-xl text-white " />
      )}
    </button>
  );
}
