import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCatID } from '../redux/slices/filtersSlice';

function Categories() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.filters.catID);

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCatItem = (id) => {
    dispatch(setCatID(id));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickCatItem(i)}
              className={category === i ? 'active' : ''}>
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
