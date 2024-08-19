import Card from "./Card";
import {
  type DataFormat,
  getAllElements,
  getElement,
  getElementAssetData,
  SimpleText,
  StyledText,
} from "@stoati/tools";

const Gallery = ({ gallery }: { gallery: DataFormat }) => {
  const assets = getAllElements(gallery, "assetWithTitle") ?? [];

  const cards = assets.map((element) => {
    const assetUrl = getElementAssetData(getElement(element, "asset"));

    return {
      id: element.id,

      content: (
        <div>
          <p className="font-bold text-4xl ">
            <SimpleText data={element} path="assetTitle" />
          </p>
          <p className="font-normal text-base"></p>
          <p className="font-normal text-base my-4 max-w-lg ">
            <StyledText data={element} path="assetDescription" />
          </p>
        </div>
      ),
      thumbnail: assetUrl,
      className: "col-span-1",
    };
  });

  return (
    <div className="max-w-screen-lg w-full">
      <h2 className="text-lg font-bold pl-8 pb-8">
        <SimpleText data={gallery} path="main_SimpleText#bmb28m" />
      </h2>
      <div
        className={`flex flex-col md:flex-row gap-2 p-2 flex-wrap justify-center`}
      >
        {cards.map((item) => {
          return (
            <Card
              url={item.thumbnail ?? ""}
              content={item.content}
              id={item.id}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
