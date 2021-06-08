import React, {useState} from "react";
import fetchApi from "../../utils/fetchApi";
import s from "../../styles/pages/user.module.scss";
import swal from "@sweetalert/with-react";
import { useRouter } from "next/router";


export const getServerSideProps = async (ctx) => {
  try {
    const productsData = await fetchApi("api/products", "GET");
    console.log(productsData);
    if (!productsData) {
      return {
        statusCode: 503,
      };
    }
    const { products } = await productsData.json();

    return {
      props: {
        products,
        dni: ctx.query.dni,
        statusCode: 200,
      },
    };
  } catch (e) {
    ctx.statusCode = 503;
    return {
      props: {
        statusCode: 503,
      },
    };
  }
};

function index({ products, dni }) {
    const router = useRouter();
    const [skuSelected, setSkuSelected] = useState({
        sku:""
    })

    const [newProduct, setNewProduct] = useState({
        productName:"",
        currency:"",
        tax:0,
        sku:""
    })

     const selectSku = async (e) => {
    try {
      setSkuSelected({
          ...skuSelected,
          [e.target.name]:e.target.value
        })
    } catch (error) {
      console.log(error);
    }
  };

  const requestProduct = async (e) => {
    e.preventDefault();
    const res = await fetchApi(`api/user/requestnewproduct/${dni}`, "POST", skuSelected);
      swal({
        title: "Success",
        text: "Product added successfully. The product status is pending",
        icon: "success",
        buttons: true,
        dangerMode: false,
      });
      router.push(`/user?dni=${dni}`);

  };

  const createProduct = async (e) => {
    e.preventDefault();
    const res = await fetchApi(`api/newproduct/create`, "POST", newProduct);
      swal({
        title: "Success",
        text: "Product created successfully.",
        icon: "success",
        buttons: true,
        dangerMode: false,
      });
      router.push(`/newproduct?dni=${dni}`);

  };

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <div className={s.container}>
      <h1>This is the form to request a new product</h1>
      <h3>Here you can see the products available for you</h3>
      <div className={s.accountsContainer}>
        {products.map((item) => {
          return (
              <div className = {s.card} key={Math.random()}>
                  <h3>Product: {item.ProductName}</h3>
                  <p>Currency: {item.Currency}</p>
                  <p>Tax: {item.Tax}</p>
                  <p>Sku: {item.Sku}</p>

              </div>
          );
        })}
      </div>
      <form className={s.form} onSubmit={requestProduct}>
          <h3>Please Select the product of your interest: </h3>
          <select name= "sku" onChange={(e) => selectSku(e)}>
              {products.map((product, index) => {
                return (
                  <option key={index} value={product.Sku}>
                    {product.ProductName}
                  </option>
                );
              })}
            </select>
            <button className="button" type="submit">
                Send request
              </button>
      </form>

      <form className={s.form} onSubmit={createProduct}>
          <h3>Please create a new product: </h3>
          <p>ProductName:</p>
          <input type="text" name="productName" placeholder="Product name" onChange={handleInputChange} />
          <p>Currency:</p>
          <input type="text" name="currency" placeholder="Currency" onChange={handleInputChange} />
          <p>Tax:</p>
          <input type="float" name="tax" placeholder="Tax" onChange={handleInputChange} />
          <p>Sku:</p>
          <input type="text" name="sku" placeholder="Sku" onChange={handleInputChange} />
            <button className="button" type="submit">
                Send request
              </button>
      </form>


    </div>
  );
}

export default index;
