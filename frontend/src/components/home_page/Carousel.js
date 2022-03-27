import React from "react";
import styles from "./Carousel.module.css";
import { useState, useEffect } from "react";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const CarouselBanner = () => {
  const [count, setCount] = useState(0);
  const [offSet, setOffSet] = useState(0);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  const increment = () => {
    setCount((state) => state + 1);
    if (count === 0) {
      setOffSet((state) => state - 100);
    } else {
      if (dimensions.width < 768) {
        setOffSet((state) => state - 75);
      } else {
        setOffSet((state) => state - 80);
      }
    }
  };

  const decrement = () => {
    setCount((state) => state - 1);
    if (count === 1) {
      setOffSet((state) => state + 100);
    } else {
      if (dimensions.width < 768) {
        setOffSet((state) => state + 75);
      } else {
        setOffSet((state) => state + 80);
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={
            count === 0
              ? `${styles.leftBtn} ${styles.hide}`
              : `${styles.leftBtn}`
          }
          onClick={decrement}
        >
          <svg
            height="20"
            width="20"
            viewBox="0 0 44 44"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs />
            <path
              fill="white"
              className="cls-1"
              id="Arrow"
              d="M806,1243a22,22,0,1,0,22,22A22.025,22.025,0,0,0,806,1243Zm0,41a19,19,0,1,1,19-19A19,19,0,0,1,806,1284Zm-1.553-19.1,6.893-6.89a1.5,1.5,0,1,0-2.121-2.12l-9.014,9.01,2.312,2.31,6.718,6.72a1.5,1.5,0,0,0,2.121-2.12Z"
              transform="translate(-784 -1243)"
            />
          </svg>
        </div>
        <div
          className={
            count === 1
              ? `${styles.rightBtn} ${styles.hide}`
              : `${styles.rightBtn}`
          }
          onClick={increment}
        >
          <svg
            height="20"
            width="20"
            viewBox="0 0 44 44"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs />
            <path
              fill="white"
              className="cls-1"
              id="Arrow"
              d="M717,1243a22,22,0,1,0,22,22A22.025,22.025,0,0,0,717,1243Zm0,41a19,19,0,1,1,19-19A19,19,0,0,1,717,1284Zm-1.839-28.12a1.5,1.5,0,0,0-2.121,2.12l6.717,6.72-6.717,6.72a1.5,1.5,0,0,0,2.121,2.12l8.839-8.84-2.121-2.12Z"
              transform="translate(-695 -1243)"
            />
          </svg>
        </div>
        <div className={styles.overflowContainer}>
          <div
            className={styles.slidingWindow}
            style={{ transform: `translate(${offSet}%)` }}
          >
            <div className={styles.id1}>
              <div className={styles.content1}></div>
            </div>
            <div className={styles.id2}>
              <div className={styles.content2}>
                <div className={styles.subcontent2}></div>
                <div className={styles.subcontent2}></div>
              </div>
            </div>
            <div className={styles.id2}>
              <div className={styles.content2}>
                <div className={styles.subcontent2}></div>
                <div className={styles.subcontent2}></div>
              </div>
            </div>
            <div className={styles.id2}>
              <div className={styles.content2}>
                <div className={styles.subcontent2}></div>
                <div className={styles.subcontent2}></div>
              </div>
            </div>
            <div className={styles.id2}>
              <div className={styles.content2}>
                <div className={styles.subcontent2}></div>
                <div className={styles.subcontent2}></div>
              </div>
            </div>
            <div className={styles.id2}>
              <div className={styles.content2}>
                <div className={styles.subcontent2}></div>
                <div className={styles.subcontent2}></div>
              </div>
            </div>
            <div className={styles.id2}>
              <div className={styles.content2}>
                <div className={styles.subcontent2}></div>
                <div className={styles.subcontent2}></div>
              </div>
            </div>
            <div className={styles.id2}>
              <div className={styles.content2}>
                <div className={styles.subcontent2}></div>
                <div className={styles.subcontent2}></div>
              </div>
            </div>
            <div className={styles.id2}>
              <div className={styles.content2}>
                <div className={styles.subcontent2}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.id3}>
        <div className={styles.content3}>
          <div className={styles.subcontent3}></div>
        </div>
        <div className={styles.content3}>
          <div className={styles.subcontent3}></div>
        </div>
        <div className={styles.content3}>
          <div className={styles.subcontent3}></div>
        </div>
        <div className={styles.content3}>
          <div className={styles.subcontent3}></div>
        </div>
        <div className={styles.content3}>
          <div className={styles.subcontent3}></div>
        </div>
        <div className={styles.content3}>
          <div className={styles.subcontent3}></div>
        </div>
        <div className={styles.content3}>
          <div className={styles.subcontent3}></div>
        </div>
        <div className={styles.content3}>
          <div className={styles.subcontent3}></div>
        </div>
        <div className={styles.content3}>
          <div className={styles.subcontent3}></div>
        </div>
      </div>
    </>
  );
};

export default CarouselBanner;
