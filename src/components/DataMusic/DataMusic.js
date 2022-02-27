import React from "react";
import { v4 as uuidv4 } from "uuid";

const DataMusic = () => {
  return [
    {
      id: uuidv4(),
      musicName: "ANTIMIDAS",
      artist: "PARKBENCH EPIPHANY",
      audioAddress: "https://mp3.chillhop.com/serve.php/?mp3=27500",
      coverPict:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      color: ["#FB9B9F", "#5F7986"],
      active: true,
    },
    {
      id: uuidv4(),
      musicName: "la zona",
      artist: "Maydee",
      audioAddress: "https://mp3.chillhop.com/serve.php/?mp3=27455",
      coverPict:
        "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
      color: ["#97ABC3", "#6E4E01"],
      active: false,
    },
    {
      id: uuidv4(),
      musicName: "Hung Up",
      artist: "Ezzy",
      audioAddress: "https://mp3.chillhop.com/serve.php/?mp3=24699",
      coverPict:
        "https://chillhop.com/wp-content/uploads/2021/09/dc49d7971512be0192848d072efdaaab91a4c73c-1024x1024.jpg",
      color: ["#1F5C54", "#392E4C"],
      active: false,
    },
    {
      id: uuidv4(),
      musicName: "Perfect Storm",
      artist: "Aviino",
      audioAddress: "https://mp3.chillhop.com/serve.php/?mp3=23057",
      coverPict:
        "https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
      color: ["#FBF69B", "#302A2E"],
      active: false,
    },
    {
      id: uuidv4(),
      musicName: "I Main Samus Now",
      artist: "Sleepy Fish",
      audioAddress: "https://mp3.chillhop.com/serve.php/?mp3=24822",
      coverPict:
        "https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",
      color: ["#043057", "#FCBE95"],
      active: false,
    },
    {
      id: uuidv4(),
      musicName: "Looking In",
      artist: "Smile High, Teddy Roxpin",
      audioAddress: "https://mp3.chillhop.com/serve.php/?mp3=23335",
      coverPict:
        "https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg",
      color: ["#569FA8", "#0E1448"],
      active: false,
    },
    {
      id: uuidv4(),
      musicName: "Where The Sun Goes",
      artist: "Delayde, anybodyy",
      audioAddress: "https://mp3.chillhop.com/serve.php/?mp3=23188",
      coverPict:
        "https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg",
      color: ["F2ABEA", "671CB6"],
      active: false,
    },
  ];
};

export default DataMusic;
