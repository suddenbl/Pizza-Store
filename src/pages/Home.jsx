import React, { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../App';
import axios from 'axios';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';

const Home = () => {
  // Хранение массива пицц
  const [items, setItems] = useState([]);
  // Состояние загрузки для отображения скелетона
  const [isLoading, setIsLoading] = useState(true);
  // Состояние выбранной категории
  const [categoryId, setCategoryId] = useState(0);
  // Состояние выбранной сортировки
  const [sortType, setSortType] = useState({ name: 'популярности', sortProperty: 'rating' });
  // Состояние номера текущей страницы
  const [curPage, setCurPage] = useState(1);
  // Передача значения состояния строки поиска
  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);

    // Порядки поиска
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `&_category=${categoryId}` : '';
    const page = `_page=${curPage}`;

    // НЕ РАБОТАЕТ !!! ПОЧЕМУ??? ХЗ
    // const search = searchValue > 0 ? `&q=${searchValue}` : '';

    axios
      .get(
        `http://localhost:3000/pizzas?${page}&_limit=8${category}&_sort=${sortBy}&_order=${order}&q=${searchValue}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    // window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, curPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurPage(number)} />
    </div>
  );
};

export default Home;
