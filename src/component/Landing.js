import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [foodList, setFoodList] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    getallFoodBycategory();
  }, []);

  const getallFoodBycategory = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")

      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setFoodList(res.data.categories);
        }
      });
  };
  const handleCategoryDetail = (category) => {
    history("/food_by_category/" + category);
  };
  console.log(foodList);
  return (
    <div className="container-fluid bg-light">
      <div>
        <input className="form-control my-3" placeholder="enter" />

        <div className="">
          <div className="row">
            {foodList.map((data, index) => {
              return (
                <div className="col-sm-3 my-3">
                  <div className="card">
                    <div
                      className="card-body"
                      onClick={() => handleCategoryDetail(data.strCategory)}
                    >
                      <img className="w-100" src={data.strCategoryThumb} />
                      <div className="category my-3">{data.strCategory}</div>
                      <div className="description">
                        {data.strCategoryDescription}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
