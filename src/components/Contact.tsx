import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:adnanghazali111@gmail.com"
                data-cursor="disable"
              >
                Email — adnanghazali111@gmail.com
              </a>
            </p>
            <p>
              Phone — +91 7366968147
            </p>
            <p>
              Location — India
            </p>
            <h4>Education</h4>
            <p>
              B.Tech in Computer Science & Engineering, Galgotias University — 2023–2027
            </p>
            <p>
              Intermediate (Class 12), Patna Muslim High School, Patna — 2022
            </p>
            <p>
              Matriculation (Class 10), Himalayan International School — 2020
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/adnanghazali111"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/adnan-ghazali-0a8b30274?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/Adnan_ghazali_111/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/theadnanghazali?igsh=MWFxazJpZ2hwdG15eg=="
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Adnan Ghazali</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
