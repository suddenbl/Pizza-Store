import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  // redux
  const { catID, sort } = useSelector((state) => state.filters);

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [curPage, setCurPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);

    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = catID > 0 ? `category=${catID}` : '';
    const search = `&q=${searchValue}`;

    axios
      .get(
        `http://localhost:3000/pizzas?${category}&_page=${curPage}&_limit=6&_sort=${sortBy}&_order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [catID, sort, searchValue, curPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurPage(number)} />
    </div>
  );
};

export default Home;
