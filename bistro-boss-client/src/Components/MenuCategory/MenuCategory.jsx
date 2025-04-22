import Cover from "../Cover/Cover";
import ItemCards from "../ItemCards/ItemCards";

const MenuCategory = ({ categories,bgImage, title, des }) => {
  return (
    <div>
      {bgImage && <Cover img={bgImage} title={title} des={des}></Cover>}
      <div className="grid md:grid-cols-2 gap-5 my-12">
        {
          categories.map(item=> <ItemCards item={item} key={item._id}></ItemCards>)
        }
      </div>

    </div>
  );
};

export default MenuCategory;
