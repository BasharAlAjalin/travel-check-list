export default function Status({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding to your packing list 🌏</em>
      </p>
    );

  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numItemsPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? " You're alrady done packing everything 👌"
          : `You have ${numItems} of items on your list , and you have
        ${numItemsPacked} items packed ${packedPercentage}%`}
      </em>
    </footer>
  );
}
