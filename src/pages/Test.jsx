import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import InfiniteScrollReverse from "react-infinite-scroll-reverse";
const style = {
  textAlign: "center",
  color: "green",
  border: "2px solid red",
  width: "50%",
  margin: "10px 10px",
  fontWeight: "500",
};





const Test = () => {
  const [dataSrc, setDataSrc] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsList, setItemsList] = useState([]);
  const itemsListTotal = 100500;

  const fetchMoreData = () => {
    if (dataSrc.length < 200) {
      setTimeout(() => {
        setDataSrc(dataSrc.concat(Array.from({ length: 20 })));
      }, 2000);
    } else {
      setHasMore(false);
    }
  };

  const refeshData = () =>{
    setTimeout(()=>{
      setDataSrc(deArray =>{
        deArray = new Array.from({length: 20});
      })
    }, 2000)
  }

  function getItems(page) {
    setIsLoading(true);
    setTimeout(() => {
      setItemsList(prev => ([...prev, { id: `uniq${page}`, name: "Alex" }]));
      setIsLoading(false);
    }, 300)
  }




useEffect(()=>{
  getItems(1);
}, []);

  return (
    // <div>
    //   <InfiniteScroll
    //     dataLength={dataSrc.length}
    //     next={fetchMoreData}
    //     hasMore={hasMore}
    //     loader={<h1>Loading...</h1>}
    //     height={500}
    //     refreshFunction={refeshData}
    //     pullDownToRefresh
    //     pullDownToRefreshThreshold = {50}
    //     pullDownToRefreshContent={
    //       <h3 style={{ textAlign: "center" }}> Pull down to refresh</h3>
    //     }
    //     releaseToRefreshContent={
    //       <h3 style={{ textAlign: "center" }}> Release to refresh</h3>
    //     }
    //   >
    //     {dataSrc.map((item, index) => {
    //       return <h2 style={style}>This is a div #{index + 1} </h2>;
    //     })}
    //   </InfiniteScroll>
    // </div>
      <div>
            <InfiniteScrollReverse
  className="itemsContainer"
  hasMore={itemsList?.length < itemsListTotal}
  isLoading={isLoading}
  loadMore={getItems}
  loadArea={30}
>
  {itemsList.map(item => (
    <div key={item.id}>{item.name}</div>
  ))}
</InfiniteScrollReverse>
      </div>

  );
};

export default Test;
