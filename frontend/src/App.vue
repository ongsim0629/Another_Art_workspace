<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand">Another art</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/about" class="nav-link" aria-current="page">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/artworks" class="nav-link">Artworks</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/community" class="nav-link">Community</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact us</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn" type="submit">Search</button>
      </form>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/setting" class="nav-link" aria-current="page">Setting</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/mypage" class="nav-link">Mypage</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<header>
  <div class="itemNav">아이템 네비게이터</div>
  <div>
    <div>지금 경매에 올라와 있는 예술 작품들</div>
    <li class="dropdown">
      <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            작품 정렬
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">최신순</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">인기순</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">입찰가 오름차순</a></li>
            <li><a class="dropdown-item" href="#">입찰가 내림차순</a></li>
          </ul>
    </li>
  </div>
  
</header>

   <div>
      <div className="product_container">
            <div className="product">
                <div className="product_img_div"><img src="@/assets/logo.png" className="product_img"/></div>
                <h5 className="product_title"> 작품 제목</h5>
                <p className="product_des"> 작품 설명</p>
                <p className="product_des"> 등록 날짜</p>
                <p className="product_des"> 작가</p>
                <p className="product_des"> 경매 횟수</p>
                <div className="product_mon">15,000￦</div>
                <p className="product_des"> 해시태그</p>
            </div>
      </div>
      </div>
  

          

<div class="mt-4">
  
  
  <router-view></router-view>
  <div id="container">
    <div class="btnArea">
      <button type="button" id="topBtn"  @click="ScrollToTop">위로</button>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{}
  },
  
  components: {
  },
  methods: {
  
  ScrollToTop(){
    var body = document.getElementsByTagName("body")[0];
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top:body.offsetTop});
  },
}};

</script>

<style>
.product_container{
  display:flex;
  flex-direction: row;
  flex-wrap : wrap;
  width: 100%;
}
.product{
  width:25%;
  height: 100%;
  margin-bottom : 4%;
   background-color: gray;
  /* border: 1px solid black; */
}
.product_img_div{
  text-align: center;
}
.product_img{
  max-width:95%;
  max-height:100%;
}
.product_title{
  font-size : 1.3rem;
  font-weight: 600;
  margin : 4%;
}
.product_des{
  font-size : 0.8rem;
  margin : 2% 3% 2% 4%;
}
.product_mon{
  font-size : 1rem;
  margin : 2% 3% 1% 4%;
}
.product_link_div{
  text-align: center;
}
.product_link{
  position:inherit;
  font-size : 1.2rem;
  font-weight: 500;
  text-decoration: none;
  background : #0B5ED9;
  color : white;
  border-radius : 10px;
  padding :5px;
}
.itemNav{background-color: gray;}
#container { height:200000px; position:relative; }
.btnArea { position:fixed; bottom:10px; right:10px; }


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
