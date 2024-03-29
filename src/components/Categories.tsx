type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};
export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-b-rose-400 mb-2">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-rose-400 ${
              category === selected && 'text-rose-400'
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
