import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Build from "./bulid.jpg";
import Youcoco from "./youcoco.png";
import Cocogod from "./cocogod.png";
import Piggod from "./pidgod.png";

export function Layout() {
  return (
    <nav className="container-fluid p-3 Bgo text-white text-center row">
      <img src={Build} alt="bulid" className="photo rounded-circle" />
      <NavLink
        to="/"
        className="link px-2 col-sm-2 mt-3 Editfo siligon"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าหลัก
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2 col-sm-1 mt-3 Editfo siligon"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

export function Footer() {
  return (
    <div class="container-fluid Bgo p-3 mt-5 text-center">
      <nav class="row">
        <div className="col-sm-2 mt-2">
          <h3 className="Editfo siligon01">@ 2023</h3>
        </div>
        <div className="col-sm-3 mt-2 siligon02">
          <h3 className="Editfo siligon02">ggh</h3>
        </div>
        <div class="col-sm-5 ">
          <></>
        </div>
        <div className="col-sm-2 mt-2 siligon02">
          <h3 className="Editfo">Back to top</h3>
        </div>
      </nav>
    </div>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <div class="container mt-5">
        <div class="row">
          <div className="polygon col-sm-12 p-2 text-center">
            <h3>วิธีทำอาหารญี่ปุ่นยอดฮิต</h3>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={Piggod}
              alt="pigod"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ข้าวหมูทอดทงคัตสึ</h3>
            <p className="Lumideim p-2">
              หมูทอดทงคัตสึ แกงกะหรี่ ราเมน ทาโกะยากิ ไก่คาราอาเกะ
              ไปจนถึงของหวานยอดฮิตอย่าง ไดฟูกุ โมจิ หรือ โดรายากิ รวม ๆ แล้วกว่า
              15 เมนู รับรองว่า แต่ละสูตร ทำได้เองง่าย ๆ ไม่ต้องบินไปถึงญี่ปุ่น
              ก็อร่อยฟินได้ทุกวันแน่นอน หากอยากรู้ว่า มีอะไรบ้างแล้วละก็
              เตรียมจับกระทะ จับตะหลิว แล้วตามมาดูกันเลย{" "}
            </p>
            <a
              class="button btn btn-secondary Alumineam"
              href="Food01.js"
              type="button"
            >
              ดูวิธีทำ
            </a>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={Youcoco}
              alt="youcoco"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ข้าวหน้าเนื้อดงบุริ</h3>
            <p className="Lumideim p-2">
            สูตร ข้าวหน้าเนื้อ สไตล์ เมนูอาหารญี่ปุ่น ของ Youtuber ช่อง
                  Chef Bas Fast Food ถอดแบบมาจากข้าวหน้าเนื้อญี่ปุ่นแท้ ๆ
                  เลยก็ว่าได้ โดยเฉพาะในส่วนของซอสผัด ที่ใช้น้ำซุปดาชิ มิริน และ
                  ซอสโชยุ เป็นส่วนผสม ซึ่งถ้าหากใครอยากทำให้เหมือนต้นฉบับ
                  ทำตามสูตรนี้ได้เลย รับรองว่า ไม่ผิดหวัง{" "}
            </p>
            <button type="button" class="btn btn-secondary Alumineam">
              ดูวิธีทำ
            </button>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={Cocogod}
              alt="cocogod"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ปลาซาบะย่างซอสเทริยากิ</h3>
            <p className="Lumideim p-2">
            ใครอยากทาน ปลาซาบะราดซอสเทริยากิ แบบดั้งเดิม
                  แนะนำให้ลองทำตามสูตรนี้เลย เพราะนี่คือสูตรจาก เชฟโฌ
                  เชฟชาวญี่ปุ่นที่มาอาศัยอยู่ในประเทศไทย
                  รับรองว่าไม่ต้องไปทานถึงร้านอาหารญี่ปุ่น
                  ก็จะได้ลิ้มรสชาติที่อร่อย ตามแบบฉบับชาวญี่ปุ่นแน่นอนว{" "}
            </p>
            <button type="button" class="btn btn-secondary Alumineam">
              ดูวิธีทำ
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/contact" element={<Container />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
