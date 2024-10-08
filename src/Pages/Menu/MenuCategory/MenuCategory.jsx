import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
const MenuCategory = ({ items, title, coverImg }) => {
  console.log(title);
  return (
    <div className="pb-12">
      {title && <Cover bgImage={coverImg} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        {title && (
          <Link
            to={`/orders/${title?.toLowerCase()}`}
            className="btn btn-outline btn-success border-0 border-b-4 mt-6"
          >
            Order Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default MenuCategory;
