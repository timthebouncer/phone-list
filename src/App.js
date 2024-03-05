import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
          <h1 className="logo">
            <img src="/logo192.png" />
            {/*<img src="https://picsum.photos/60/40?random=1" />*/}
          </h1>
          <div className="menu-btn">

          </div>
          <nav className='nav-list'>
            <a href="">A</a>
            <a href="">B</a>
            <a href="">C</a>
            <a href="">D</a>
            <a href="">E</a>
          </nav>
      </div>
      <div className="banner">
        <img src="https://picsum.photos/1400/400" />
      </div>
      <div className="decs">
        <div className="title">
          詳情
        </div>
        <div className="text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="detail">
          <div className="item-list">
            <div className="item">
              <div className="pic">
                <img src="https://picsum.photos/1400/600?random=3" />
              </div>
              <div className="text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              </div>
            </div>
            <div className="item">
              <div className="pic">
                <img src="https://picsum.photos/1400/600?random=4" />
              </div>
              <div className="text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              </div>
            </div>
          </div>
      </div>
      <div className="service">
          <div className="item-list">
              <div className="pic">
                <img src="https://picsum.photos/1400/600?random=5" />
              </div>
              <div className="text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
          </div>
      </div>
      <div className="about">
        <div className="title">
          關於
        </div>
        <div className="item-list">
          <div className="item">
            <div className="pic">
              <img src="https://picsum.photos/300/200?random=6" />
            </div>
            <div className="text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="text">
              <div className="pic">
                <img src="https://picsum.photos/600/400?random=7" />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="pic">
              <img src="https://picsum.photos/600/400?random=8" />
            </div>
            <div className="text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="pic">
              <img src="https://picsum.photos/600/400?random=9" />
            </div>
            <div className="text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        copyright
      </div>
    </div>
  );
}

export default App;
