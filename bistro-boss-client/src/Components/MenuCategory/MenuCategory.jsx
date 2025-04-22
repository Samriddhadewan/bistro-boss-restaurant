import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import ItemCards from "../ItemCards/ItemCards";

const MenuCategory = ({ categories,bgImage, title, des }) => {
  return (
    <div className="my-10">
      {bgImage && <Cover img={bgImage} title={title} des={des}></Cover>}
      <div className="grid md:grid-cols-2 gap-5 my-12">
        {
          categories.map(item=> <ItemCards item={item} key={item._id}></ItemCards>)
        }
      </div>
      <div className=" flex items-center justify-center">
      {
        title && <Link to={`/order/${title}`}><button className="btn text-[#1F2937] text-xl px-8  font-medium border-[#1F2937] border-0 border-b-4 rounded-lg">See all {title}</button></Link>
      }
      </div>

    </div>
  );
};

export default MenuCategory;
