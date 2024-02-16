import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Card = ({ productId }) => {
  const product1 = [
    {
      id: 1,
      name: "Innis Free Face wash 25 gm",
      category: "Beauty",
      price: "$30.99",
      imageSrc: "/product_images/innisfree_facewash.jpg",
      status: "success",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      category: "Beauty",
      price: "$30.99",
      imageSrc: "/product_images/innisfree_facewash.jpg",
      status: "pending",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      category: "Beauty",
      price: "$30.99",
      imageSrc: "/product_images/innisfree_facewash.jpg",
      status: "pending",
      username: "Bret",
      email: "Sincere@april.biz",
    },
  ];
  const product2 = [
    {
      id: 1,
      name: "Innis Free Face wash 25 gm",
      category: "Beauty",
      price: "$30.99",
      imageSrc: "/product_images/innisfree_facewash.jpg",
      status: "pending",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      category: "Beauty",
      price: "$30.99",
      imageSrc: "/product_images/innisfree_facewash.jpg",
      status: "pending",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      category: "Beauty",
      price: "$30.99",
      imageSrc: "/product_images/innisfree_facewash.jpg",
      status: "pending",
      username: "Bret",
      email: "Sincere@april.biz",
    },
  ];
  const product3 = [
    {
      id: 1,
      name: "Innis Free Face wash 25 gm",
      category: "Beauty",
      price: "$30.99",
      imageSrc: "/product_images/innisfree_facewash.jpg",
      status: "pending",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      category: "Beauty",
      price: "$30.99",
      imageSrc: "/product_images/innisfree_facewash.jpg",
      status: "pending",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      category: "Beauty",
      price: "$30.99",
      imageSrc: "/product_images/innisfree_facewash.jpg",
      status: "success",
      username: "Bret",
      email: "Sincere@april.biz",
    },
  ];
  const product4 = [
    {
      id: 1,
      name: "Innis Free Face wash 25 gm",
      category: "Beauty",
      price: "$30.99",
      imageSrc: "/product_images/innisfree_facewash.jpg",
      status: "pending",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      category: "Beauty",
      price: "$30.99",
      imageSrc: "/product_images/innisfree_facewash.jpg",
      status: "success",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      category: "Beauty",
      price: "$30.99",
      imageSrc: "/product_images/innisfree_facewash.jpg",
      status: "pending",
      username: "Bret",
      email: "Sincere@april.biz",
    },
  ];

  const [product, setproduct] = useState([]);

  useEffect(() => {
    if (productId == 1) {
      setproduct(product1);
    } else if (productId == 2) {
      setproduct(product2);
    } else if (productId == 3) {
      setproduct(product3);
    } else if (productId == 4) {
      setproduct(product4);
    } else {
      setproduct([]);
    }
  }, [productId]);

  return (
    <>
      <Wrapper className="poppins-regular">
        <h2 className="heading">Recenet Orders</h2>
        <Box>
          <StyledTable width={"100%"} className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Products</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {product.map((currUser, index) => (
                <tr key={index} className="gorditas-regular ">
                  <td data-label="User Name">{currUser.name}</td>
                  <td data-label="Email">{currUser.category}</td>
                  <td data-label="Phone">{currUser.price}</td>
                  <td
                    data-label="Website"
                    className={
                      currUser.status === "pending" ? "pending" : "success"
                    }
                  >
                    {currUser.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </Box>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
margin-top: 1rem;
  .heading{
    text-align: left;
    padding: 1rem 0;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTable = styled.table`
  width: 90%;
  text-align: left;
  border-collapse: collapse;
  @media screen and (max-width: 600px) {
    max-width: 80%;
    font-size: 10px;
  }
  .pending {
    color: red;
  }
  .success {
    color: green;
  }
  th{
    /* background-color: black;
    color:white; */
  }

`;

export default Card;