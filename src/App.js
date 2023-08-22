import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./contact.js";
import Build from "./bulid.jpg";
function App() {
  return (
    <body>
      <div className="row">
        <nav className="bg-secondary p-3 mb-2 text-light">
          <img
            src={Build}
            alt="bulid"
            className="photo"
            class="rounded-circle"
          ></img>
          <a href="*" className="col-md-1">
            Home
          </a>
          <a href="*" className="col-md-1">
            contact
          </a>
          <a href="*" className="col-md-1">
            Product
          </a>
        </nav>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col mt-3">
            <h3>I love HUM</h3>
          </div>
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-4 mt-5">
                <img
                  src={Build}
                  alt="build"
                  className="photer rounded-circle"
                ></img>
                <h3>Column 1</h3>
                <p>
                  พระเจ้าได้สร้างโลกนี่มาเพื่ออะไรกันแหน่ทำไมพระเจ้าจึงชอบทำให้เพื่อนโอ๊ตของผมเป็นเกย์กันน่ะ
                  ดาบที่ถูกเลือกมันช่างวิเศษ
                </p>
                <button type="button" class="btn btn-secondary">
                  เรียนรู้เพิ่มเติม
                </button>
              </div>

              <div className="col-sm-4 mt-5">
                <img
                  src={Build}
                  alt="build"
                  className="photer"
                  class="rounded-circle"
                ></img>
                <h3>Column 2</h3>
                <p>
                  พระเจ้าได้สร้างโลกนี่มาเพื่ออะไรกันแหน่ทำไมพระเจ้าจึงชอบทำให้เพื่อนโอ๊ตของผมเป็นเกย์กันน่ะ
                  ดาบที่ถูกเลือกมันช่างวิเศษ
                </p>
                <button type="button" class="btn btn-secondary">
                  เรียนรู้เพิ่มเติม
                </button>
              </div>

              <div className="col-sm-4 mt-5">
                <img
                  src={Build}
                  alt="build"
                  className="photer"
                  class="rounded-circle"
                ></img>
                <h3>Column 3</h3>
                <p>
                  พระเจ้าได้สร้างโลกนี่มาเพื่ออะไรกันแหน่ทำไมพระเจ้าจึงชอบทำให้เพื่อนโอ๊ตของผมเป็นเกย์กันน่ะ
                  ดาบที่ถูกเลือกมันช่างวิเศษ
                </p>
                <button type="button" class="btn btn-secondary">
                  เรียนรู้เพิ่มเติม
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
