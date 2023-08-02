import "./App.css";

function App() {
  return (
    <div className="main-div">
      <div className="sub-div">
        <h1>Facebook</h1>
        <img
          src="https://cdn.siasat.com/wp-content/uploads/2021/01/1200-900-Facebook.jpg"
          style={{
            height: 100,
            width: 100,
          }}
          alt="facebook logo"
        />
        <br />
        <a href="https://fb.com">Visit site</a>

        <p>
          Meta Platforms, Inc., doing business as Meta, and formerly named
          Facebook, Inc., and TheFacebook, Inc., is an American multinational
          technology conglomerate based in Menlo Park, California. The company
          owns and operates Facebook, Instagram, Threads, and WhatsApp, among
          other products and services
        </p>
      </div>
      <div className="sub-div">
        <h1>Instagram</h1>
        <img
          src="data:image/jpeg;base64,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"
          style={{
            height: 100,
            width: 100,
          }}
          alt="instagram logo"
        />
        <br />
        <a href="https://instagram.com">Visit site</a>

        <p>
          Instagram is a free photo and video sharing app available on iPhone
          and Android. People can upload photos or videos to our service and
          share them with their followers or with a select group of friends.
          They can also view, comment and like posts shared by their friends on
          Instagram.
        </p>
      </div>
      <div className="sub-div">
        <h1>Tiktok</h1>
        <img
          src="https://img.freepik.com/free-vector/tiktok-banner-with-watercolor-splatter_69286-194.jpg?w=2000"
          style={{
            height: 100,
            width: 100,
          }}
          alt="tiktok logo"
        />
        <br />
        <a href="https://tiktok.com">Visit site</a>

        <p>
          TikTok, whose mainland Chinese counterpart is Douyin, is a short-form
          video hosting service owned by ByteDance. It hosts user-submitted
          videos, which can range in duration from 3 seconds to 10 minutes.
          Since their launches, TikTok and Douyin have gained global popularity.
        </p>
      </div>
      <div className="sub-div">
        <h1>X</h1>
        <img
          src="https://t3.ftcdn.net/jpg/04/63/26/26/360_F_463262649_OnqToJa13OkWhGHQPiwpRGPuhPWELvp6.jpg"
          style={{
            height: 100,
            width: 100,
          }}
          alt="x logo"
        />
        <br />
        <a href="https://x.com">Visit site</a>

        <p>
          Twitter, Inc. was an American social media company based in San
          Francisco, California. The company operated the social networking
          service Twitter and previously the Vine short video app and Periscope
          livestreaming service.
        </p>
      </div>
    </div>
  );
}

export default App;
