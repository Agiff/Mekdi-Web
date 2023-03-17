import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container d-flex justify-content-evenly pt-5">
        <div className="text-start">
          <h3 className="mb-3">Menu</h3>
          <div className="text-secondary">
            <div className="my-2">
              <label>Menu Promosi</label>
            </div>
            <div className="my-2">
              <label>A La Carte & Paket</label>
            </div>
            <div className="my-2">
              <label>Tambahan</label>
            </div>
            <div className="my-2">
              <label>Pencuci Mulut</label>
            </div>
            <div className="my-2">
              <label>Minuman</label>
            </div>
            <div className="my-2">
              <label>Happy Meal</label>
            </div>
            <div className="my-2">
              <label>Menu Keluarga</label>
            </div>
            <div className="my-2">
              <label>McCafe Pastries</label>
            </div>
            <div className="my-2">
              <label>McCafe Drinks</label>
            </div>
          </div>
        </div>
        <div className="text-start">
          <h3 className="mb-3">Bantuan</h3>
          <div className="text-secondary">
            <div className="my-2">
              <label>Syarat dan Ketentuan</label>
            </div>
            <div className="my-2">
              <label>Kebijakan Privasi</label>
            </div>
            <div className="my-2">
              <label>Tanya Jawab</label>
            </div>
            <div className="my-2">
              <label>Mobile Web</label>
            </div>
          </div>
        </div>
        <div className="text-start">
          <h3 className="mb-3">Ikuti Kami</h3>
          <div className="text-secondary">
            <div className="my-2">
              <label>Facebook</label>
            </div>
            <div className="my-2">
              <label>Twitter</label>
            </div>
            <div className="my-2">
              <label>YouTube</label>
            </div>
            <div className="my-2">
              <label>Instagram</label>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="legal-text pb-1">
        <p style={{ margin: '0' }}>SELURUH HAK CIPTA DILINDUNGI OLEH MCDONALD'S 2016</p>
        <p>LOGO M DAN SLOGAN "I'M LOVIN' IT" ADALAH MILIK MCDONALD'S CORPORATION SECARA KESELURUHAN.</p>
      </div>
    </footer>
  );
};

export default Footer;
