import Gallery from "@/app/galleries/[galleryIndex]/Gallery";
import { getStoatiData, getAllElements } from "@stoati/tools";

export async function generateStaticParams() {
  const data = await getStoatiData();
  const galleries = getAllElements(data, "gallerie");

  return galleries.map((i, index) => ({
    galleryIndex: "" + index,
  }));
}

const Galleries = async ({ params }: { params: { galleryIndex: number } }) => {
  const data = await getStoatiData();
  const galleries = getAllElements(data, "gallerie");

  const gallery = galleries?.[params.galleryIndex];

  if (!gallery) {
    return <div>Gallery not found</div>;
  }

  return (
    <div className="flex flex-col items-center pt-20 min-h-screen justify-center">
      <Gallery gallery={gallery} />
    </div>
  );
};

export default Galleries;
