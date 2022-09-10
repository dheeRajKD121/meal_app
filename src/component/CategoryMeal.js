import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryMeal = () => {
  const params = useParams();
  const [meal_data, setMealData] = useState([]);
  console.log(params);
  let name = params.name;

  useEffect(() => {
    getFoodBycategory();
  }, []);
  const getFoodBycategory = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + name)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setMealData(res.data.meals);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          {meal_data.map((data, index) => {
            return (
              <div className="col-sm-3 my-3">
                <div className="card">
                  <div className="card-body">
                    <img className="w-100" src={data.strMealThumb} />
                    <div className="category my-3">{data.strMeal}</div>
                    {/* <div className="description">{data.strCategoryDescription}</div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryMeal;
