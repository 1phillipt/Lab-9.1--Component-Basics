import type { ProductDisplayProps } from "../../types";

export function ProductDisplay({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md max-w-sm">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-lg text-green-600 font-semibold">${product.price.toFixed(2)}</p>
      {showDescription && <p className="text-gray-600 mt-1">{product.description}</p>}
      {showStockStatus && (
        <p className={`mt-1 ${product.inStock ? "text-green-500" : "text-red-500"}`}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}
      {onAddToCart && product.inStock && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      )}
      {children}
    </div>
  );
}
