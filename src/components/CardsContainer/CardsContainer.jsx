import React from "react"
import { MovieCard } from "../MovieCard/MovieCard"
import styles from "./CardsContainer.module.scss"

const CardsContainer = () => {
  return (
    <div className={styles.container}>
      <MovieCard id={1337} rating={"7.1"} poster={"http://image.tmdb.org/t/p/w1280/sqLowacltbZLoCa4KYye64RvvdQ.jpg"} />
      <MovieCard id={1337} rating={"5.0"} poster={"http://image.tmdb.org/t/p/w1280/74xTEgt7R36Fpooo50r9T25onhq.jpg"} />
      <MovieCard id={1337} rating={"6.2"} poster={"http://image.tmdb.org/t/p/w1280/kuxjMVuc3VTD7p42TZpJNsSrM1V.jpg"} />
      <MovieCard id={1337} rating={"8.0"} poster={"http://image.tmdb.org/t/p/w1280/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"} />
      <MovieCard id={1337} rating={"5.0"} poster={"http://image.tmdb.org/t/p/w1280/9rJoulDnFeVGXcUsN7CjllUWADA.jpg"} />
      <MovieCard id={1337} rating={"6.5"} poster={"http://image.tmdb.org/t/p/w1280/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg"} />
      <MovieCard id={1337} rating={"7.0"} poster={"http://image.tmdb.org/t/p/w1280/4WjW6H3s4yS5QriZ5T5c9zvYGaP.jpg"} />
      <MovieCard id={1337} rating={"8.0"} poster={"http://image.tmdb.org/t/p/w1280/nJUHX3XL1jMkk8honUZnUmudFb9.jpg"} />
      <MovieCard id={1337} rating={"9.5"} poster={"http://image.tmdb.org/t/p/w1280/nCRUQcbBs6Ix6YaBeCgC9OwE0mt.jpg"} />
      <MovieCard id={1337} rating={"4.0"} poster={"http://image.tmdb.org/t/p/w1280/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg"} />
    </div>
  )
}

export { CardsContainer }
