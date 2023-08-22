
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./contact.js";
import Build from "./bulid.jpg";
import Piggod from "./pidgod.png";
import Youcoco from "./youcoco.png";
import Cocogod from "./cocogod.png";
import "./index";

function App() {
  return (
    <>
      <div className="row">
        <nav className="bg-warning p-3 mb-2 text-light">
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
            <h3>วิธีทำอาหารญี่ปุ่นยอดฮิต</h3>
          </div>
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-4 mt-5">
                <img
                  src={Piggod}
                  alt="piggod"
                  className="photer"
                  class="rounded-circle"
                ></img>
                <h3>ข้าวหมูทอดคัตสึด้ง</h3>
                <p>
                  ข้าวหมูทอด สไตล์ญี่ปุ่น ที่มีความแตกต่างจาก ข้าวหน้าหมูทงคัตสึ
                  ตรงที่ หมูทอดนั้น จะถูกนำไปตุ๋นรวมกับไข่
                  แล้วราดลงบนข้าวอีกทีหนึ่ง ทำให้เป็น เมนูอาหารญี่ปุ่น
                  ที่ได้รสชาติของซุปไข่ กินแล้วไม่ฝืด ลื่นคอกำลังดี
                </p>
                <button type="button" class="btn btn-secondary">
                  ดูวิธีทำ
                </button>
              </div>

              <div className="col-sm-4 mt-5">
                <img
                  src={Youcoco}
                  alt="youcoco"
                  className="photer"
                  class="rounded-circle"
                ></img>
                <h3>ข้าวหน้าเนื้อดงบุริ</h3>
                <p>
                  สูตร ข้าวหน้าเนื้อ สไตล์ เมนูอาหารญี่ปุ่น ของ Youtuber ช่อง
                  Chef Bas Fast Food ถอดแบบมาจากข้าวหน้าเนื้อญี่ปุ่นแท้ ๆ
                  เลยก็ว่าได้ โดยเฉพาะในส่วนของซอสผัด ที่ใช้น้ำซุปดาชิ มิริน และ
                  ซอสโชยุ เป็นส่วนผสม ซึ่งถ้าหากใครอยากทำให้เหมือนต้นฉบับ
                  ทำตามสูตรนี้ได้เลย รับรองว่า ไม่ผิดหวัง
                </p>
                <button type="button" class="btn btn-secondary">
                  ดูวิธีทำ
                </button>
              </div>

              <div className="col-sm-4 mt-5">
                <img
                  src={Cocogod}
                  alt="cocogod"
                  className="photer"
                  class="rounded-circle"
                ></img>
                <h3>ปลาซาบะย่างซอสเทริยากิ</h3>
                <p>
                  ใครอยากทาน ปลาซาบะราดซอสเทริยากิ แบบดั้งเดิม
                  แนะนำให้ลองทำตามสูตรนี้เลย เพราะนี่คือสูตรจาก เชฟโฌ
                  เชฟชาวญี่ปุ่นที่มาอาศัยอยู่ในประเทศไทย
                  รับรองว่าไม่ต้องไปทานถึงร้านอาหารญี่ปุ่น
                  ก็จะได้ลิ้มรสชาติที่อร่อย ตามแบบฉบับชาวญี่ปุ่นแน่นอน
                </p>
                <button type="button" class="btn btn-secondary">
                  ดูวิธีทำ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="MyFooter">
        <div className="row">
          <p>@ 2023 ผู้จัดทำ.Sakunwat Nawan</p>
        </div>
      </div>
    </>
  );
}

export default App;