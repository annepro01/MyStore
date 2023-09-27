import { Link } from "react-router-dom"

const Products = ({products}) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:col-span-3 lg:gap-x-8">
        {products?.map((product) => (
          <>
            {/* new  */}
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
              <div className="relative bg-gray-50">
                <span className="absolute top-0 left-0 ml-6 mt-6 px-2 py-1 text-xs font-bold font-heading bg-white border-2 border-red-500 rounded-full text-red-500">
                  -15%
                </span>
                <Link className="block" to={{pathname: `/products/${product?.id}`}}>
                  <img src={product?.images[0]} className="w-full h-80 object-cover" />
                </Link>
                <div>
                  <a className="block px-6 mb-2" href="#">
                    <h3>{product.name}</h3>
                    <p>
                      <span>${product.price}</span>
                      <span>$49.99</span>
                    </p>
                  </a>
                  <a
                    className="w-12 h-12 bg-blue-300 flex items-center justify-center w-12 h-12 ml-auto mr-2 hover:bg-blue-400 rounded-md"
                    href="#"
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x={5} width={2} height={12} fill="white" />
                      <rect
                        x={12}
                        y={5}
                        width={2}
                        height={12}
                        transform="rotate(90 12 5)"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Products