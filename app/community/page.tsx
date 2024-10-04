import Image from "next/image";
import CommunityCard from "@/components/CommunityCard";
import { title } from "process";
import { ICommunity } from "@/models/community.models";

export default function Home() {

  const mockData: ICommunity[] = [
    {
      _id: 1,
      title: "Coca Cola Survey",
      imageUrl: "https://www.graphicpear.com/wp-content/uploads/2019/02/Coca-Cola-Logo-1.jpg",
      description: "Coca Cola Survey lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "Nairobi",
    },
    {
      _id: 2,
      title: "Pepsi Challenge",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogo-marque.com%2Fwp-content%2Fuploads%2F2020%2F09%2FPepsi-Embleme.jpg&f=1&nofb=1&ipt=7ac82c48ab54e33ecbdf21626183c7c8db05040616bd535df938081cfb9c17fc&ipo=images",
      description: "Pepsi Challenge lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "New York",
    },
    {
      _id: 3,
      title: "Sprite Refresh",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0959%2F7176%2Fproducts%2Fsprite-logo_1024x1024.jpg%3Fv%3D1454413466&f=1&nofb=1&ipt=a9cb7c23ef0086e33f8e6751636e1e87f75d389a75fd93b50c058c0a4ff09102&ipo=images",
      description: "Sprite Refresh lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "Los Angeles",
    },
    {
      _id: 4,
      title: "Fanta Fun",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F05%2FFanta-Symbol.jpg&f=1&nofb=1&ipt=63323531e8cca8457bd7a4a557f33a1e444f135b2b92e838301372081ff4bb2f&ipo=images",
      description: "Fanta Fun lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "London",
    },
    {
      _id: 5,
      title: "Mountain Dew Adventure",
      imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20100630194920%2Flogopedia%2Fimages%2Fa%2Fae%2FNew_Mountian_Dew_logo.png&f=1&nofb=1&ipt=abb3595d4ddcd5c0630b858f45feee6cce787a94f523e9ef1e79ad7af334c6b2&ipo=images",
      description: "Mountain Dew Adventure lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum etc",
      location: "Sydney",
    }
  ];

  // bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#123c78] via-[#000812]  to-[#0c2c58]

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center 
    bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#1d1b45] via-[#0a0c1b]  to-[#1d1b45]
    ">
      {/* <h1 className="text-4xl font-semibold text-blue-500/100 pb-20">Community Page</h1> */}
      <div className="grid grid-cols-3 gap-12"> 
        {mockData.map((community) => (
          <CommunityCard key={community._id} community={community} />
        ))}
      </div>
    </div>
  );
}
