  <template>
    <div id="home">
      <header>
        <div class="logo">
          <h1>手机腾讯网</h1>
        </div>
        <div class="nav">
          <ul>
            <li class="active">新闻</li>
            <li>娱乐</li>
            <li>体育</li>
            <li>星座</li>
            <li>游戏</li>
            <li>健康</li>
            <li>购物</li>
            <li>美食</li>
            <li>科技</li>
            <li>育儿</li>
          </ul>
        </div>
        <div class="swiper">
          <div class="image">
            <div  style="background-color: antiquewhite" src="">1</div>
            <div  style="background-color: darkorange" src="">2</div>
            <div  style="background-color: darkgreen" src="">3</div>
            <div  style="background-color: fuchsia" src="">4</div>
          </div>
        </div>
      </header>
      <section>
        <div class="contain">
          <span class="title">新闻</span>
          <ul>
            <li>
              <h6>家庭煮男李子兴de国庆七天乐,</h6>
              <img src="http://tx.haiqq.com/uploads/allimg/170824/11002S235-5.jpg"/>
            </li>
            <li>
              <h6>想不到吧！炒菜放一物，香气四溢，馋得隔壁小孩流口水...</h6>
              <img src="http://img.duoziwang.com/2018/01/2021054017804.jpg"/>

            </li>
            <li>
              <h6>历史上的被杨家将烧的光秃秃的山上居然长出参天大树，居然是...</h6>
              <img src="http://img1.3lian.com/2015/w1/83/104.jpg"/>
            </li>
            <li>
              <h6>睡觉别做一件事，否则后悔不已</h6>
              <img src="http://img2.3lian.com/2014/f4/171/71.jpg"/>
            </li>
          </ul>
        </div>
        <div class="contain">
          <span class="title">体育</span>
          <ul>
            <li>
              <h6>家庭煮男李子兴de国庆七天乐,</h6>
              <img src="http://tx.haiqq.com/uploads/allimg/170824/11002S235-5.jpg"/>
            </li>
            <li>
              <h6>想不到吧！炒菜放一物，香气四溢，馋得隔壁小孩流口水...</h6>
              <img src="http://img.duoziwang.com/2018/01/2021054017804.jpg"/>

            </li>
            <li>
              <h6>历史上的被杨家将烧的光秃秃的山上居然长出参天大树，居然是...</h6>
              <img src="http://img1.3lian.com/2015/w1/83/104.jpg"/>
            </li>
            <li>
              <h6>睡觉别做一件事，否则后悔不已</h6>
              <img src="http://img2.3lian.com/2014/f4/171/71.jpg"/>
            </li>
          </ul>
        </div>
        <div class="contain">
          <span class="title">娱乐</span>
          <ul>
            <li>
              <h6>家庭煮男李子兴de国庆七天乐,</h6>
              <img src="http://tx.haiqq.com/uploads/allimg/170824/11002S235-5.jpg"/>
            </li>
            <li>
              <h6>想不到吧！炒菜放一物，香气四溢，馋得隔壁小孩流口水...</h6>
              <img src="http://img.duoziwang.com/2018/01/2021054017804.jpg"/>

            </li>
            <li>
              <h6>历史上的被杨家将烧的光秃秃的山上居然长出参天大树，居然是...</h6>
              <img src="http://img1.3lian.com/2015/w1/83/104.jpg"/>
            </li>
            <li>
              <h6>睡觉别做一件事，否则后悔不已</h6>
              <img src="http://img2.3lian.com/2014/f4/171/71.jpg"/>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <div class="bottom">
          <ul>
            <li>无图版</li>
            <li>反馈</li>
            <li>登录</li>
          </ul>
          <p>2018 Tencent 粤B1-2009028</p>
        </div>
      </footer>
    </div>
  </template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="less" scoped>
  ul{
    padding:0px;
    margin: 0px;
  }
  #home {
    background:#F2F7FC ;
  }
  header{
    position: relative;
    .logo{
      width: 100%;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      font-weight:600;
      background: dodgerblue;
      text-align: center;
      position: fixed;
      top: 0px;
    }
    .nav{
      width: 100%;
      margin-top: 50px;

      /*height: 80px;*/
      ul{
        /*display:inline;*/
        /*width: 100%;*/
        white-space: nowrap;
        overflow: hidden;
        overflow-x: scroll;
        &::-webkit-scrollbar {/*隐藏滚轮*/
          display: none;
        }
        li{
          list-style: none;
          display:inline-block;
          min-width: 80px;
          height: 40px;
          text-align: center;
          line-height: 40px;
        }
        .active{
          color: dodgerblue;
        }
      }
    }
    .swiper{
      width: 100%;
      height: 150px;
      overflow: hidden;
      .image{
        width: 400%;
        height: 150px;
        div{
          width: 25%;
          height: 150px;
          float: left;
        }
      }

    }
  }
  section{
    .contain{
      background: #fafafa;
      .title{
        display: inline-block;
        height: 40px;
        line-height:40px;
        font-size: 16px;
        font-weight: 700;
        color: dodgerblue;
        padding-left: 8px;
        /*background:cornflowerblue;*/

      }
      ul{
        li{
          width: calc(100% - 16px);
          display: flex;
          margin: 8px;
          padding-bottom: 10px;
          box-sizing: border-box;
          border-bottom: 1px solid #e5e5e5;
          h6{
            /*width: 80%;*/
            flex-grow: 1;
            font-size: 14px;
            line-height: 20px;
            color: #434343;
            /*height: 30px;*/
            /*line-height: 30px;*/
            /*white-space: nowrap;*/
            /*text-overflow: ellipsis;*/
          }
          img{
            width: 70px;
            height: 50px;
          }
        }
      }
    }
  }
  footer{
    .bottom{
      padding: 15px 0px;
      ul{
        display: flex;
        justify-content: center;
        li{
          padding:0px 5px;
          color: #434343;
        }
        li:nth-child(2){
          border-left: 1px solid #E5E5E5;
          border-right: 1px solid #E5E5E5;
        }
      }
      p{
        margin-top: 10px ;
        text-align: center;
        font-size: 10px;
        color: #a1a1a1;
      }

    }
  }
</style>
