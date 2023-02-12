import Image from "next/image";
import React from "react";
import demo from "../assets/demo.jpg";
import { useGetProductsQuery } from "../features/api/apiSlice";
import { Product } from "../interfaces/global";

export default function ProductItem() {
  const { data: products } = useGetProductsQuery();

  return (
    <div className="row d-flex px-5 pt-5">
      {products &&
        products.map((product: Product, id: number) => (
          <div
            key={id}
            className="col-3 mb-4 ">
            <div className="card ">
              <Image
                src={demo}
                width={300}
                height={200}
                objectFit="cover"
                alt="img"
              />
              <div className="card-body">
                <div className="div d-flex align-items-center justify-content-between">
                  <h5>{product.name}</h5>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary">
                    Add To Cart
                  </button>
                </div>
                <div>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
