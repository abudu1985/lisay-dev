import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import Toggle from "../Toggle";
import { light, dark } from "./styles/themes";
import PrintButton from "./PdfButton";
import PDFIcon from "../../services/icons8-pdf-48.png";
import {
  GlobalStyle,
  CVStylesWrapper,
  MyPhoto,
  CollorToggleBlock,
} from "./styles/StyledComponents";
import * as Constant from "../../utils/constants";
import useWindowSize from "../../utils/useWindowSize";

const Rezume = (props) => {
  const [selectedTheme, setSelectedTheme] = useState(light);
  const { width } = useWindowSize();

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <CVStylesWrapper>
        <div id="container--main">
          <CollorToggleBlock>
            <Toggle
              label="Toggle theme"
              toggled={true}
              onClick={(bool) => setSelectedTheme(bool ? light : dark)}
            />
            {width > Constant.MIDDLE_SIZE && (
              <PrintButton
                id={"container--main"}
                label={<img src={PDFIcon} alt="pdf" />}
              />
            )}
          </CollorToggleBlock>

          <section id="wrapper--hero" class="section--page">
            <MyPhoto />

            <div>
              <h1 id="user-name">Igor Luchko</h1>
              <br />
              <p id="bio">JavaScript, React developer.</p>
              <p id="email">📧 luchkoigor85@gmail.com 📞 0978968663</p>
            </div>
          </section>

          <section class="section--page">
            <div id="socials--list">
              <a
                href="https://www.youtube.com/@TraversyMedia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
              <a
                href="https://twitter.com/LuchkoIgor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/igorluchko"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              <a
                href="https://github.com/abudu1985/lisay-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </section>

          <section class="section--page">
            <h2>Skills & Qualifications</h2>
            <ul id="qualifications--list">
              <li>✔️ 5 Years experience with front development</li>
              <li>✔️ 2 Years experience with backend development.</li>
            </ul>
          </section>

          <section class="section--page">
            <h2>Tech stack</h2>

            <div id="wrapper--techstack__items">
              <div class="card--techstack">
                <span>JavaScript, Typescript</span>
              </div>
              <div class="card--techstack">
                <span>React, Redux, Node</span>
              </div>
              <div class="card--techstack">
                <span>MongoDB, Firebase, MySQL</span>
              </div>
            </div>
          </section>

          <section id="work-history-wrapper" class="section--page">
            <h2>Work History</h2>

            <div class="line-break"></div>
            <div class="card--work-history">
              <strong>📌 Frontend developer at Infopulse</strong>
              <p>5/2021 - 2/2023</p>
              <p>
                Developing new version of the audit platform (Stack:
                React/redux)
              </p>
              <ul>
                <li>add new features, bug fixing, refactoring</li>
              </ul>
            </div>

            <div class="line-break"></div>

            <div class="card--work-history">
              <strong>
                📌 Frontend developer at Siteplus (Newfold Digital Ukraine)
              </strong>
              <p>5/2019 - 5/2021</p>
              <p>
                Support existing sitebuilder editor{" "}
                <a
                  href="https://siteplus.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Siteplus
                </a>{" "}
                (Stack: React/redux)
              </p>
              <ul>
                <li>add new features, bug fixing, refactoring</li>
              </ul>
            </div>

            <div class="line-break"></div>

            <div class="card--work-history">
              <strong>📌 Frontend developer at Cosmonova</strong>
              <p>3/2019 - 5/2019</p>
              <p>
                Creating frontend part and admin panel from scratch for new site
                of{" "}
                <a
                  href="https://www.sstc.com.ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SSTC NRS
                </a>
              </p>
            </div>

            <div class="line-break"></div>

            <div class="card--work-history">
              <strong>📌 Full Stack Developer at Cogniance (Star)</strong>
              <p>10/2018 - 2/2019</p>
              <p>
                Worked with company`s inner projects (Stack:
                React/redux/Node/PHP)
              </p>
              <ul>
                <li>bug fixing, refactoring</li>
              </ul>
            </div>

            <div class="line-break"></div>

            <div class="card--work-history">
              <strong>📌 PHP/JS Developer at Skynix</strong>
              <p>05/2017 - 10/2018</p>
              <p>Maintain of actual projects: (Stack: React/redux/Node/PHP)</p>
              <ul>
                <li>
                  Job management software(crm){" "}
                  <a
                    href="http://www.emac.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EMAC
                  </a>{" "}
                </li>
                <li>
                  Plants store:{" "}
                  <a
                    href="https://classygroundcovers.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Classygroundcovers
                  </a>
                </li>
                <li>
                  development SPA that manages employees and financials inside
                  Skynix
                </li>
              </ul>
            </div>
          </section>

          <section class="section--page">
            <h2>Education</h2>

            <div class="card--additional-skills">
              <p>
                Site for making my own notes:{" "}
                <a
                  href="https://lisay-dev.firebaseapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lisay-dev
                </a>
              </p>
            </div>

            <div class="card--additional-skills">
              <p>01/2017 - 03/2017 Infopulse it univer (PHP developer, YII2)</p>
            </div>

            <div class="card--additional-skills">
              <p>01/2016 - 04/2016 PHP Academy - PHP developer</p>
            </div>

            <div class="card--additional-skills">
              <p>
                09/2006 - 04/2010 Master’s in Industrial and civil engineering
                Sumy State University
              </p>
            </div>
          </section>

          <div class="line-break"></div>

          <section class="section--page">
            <h2>Languages</h2>

            <div class="card--additional-skills">
              <p>
                English - intermediate, able to communicate in a textual and
                verbal format
              </p>
            </div>

            <div class="card--additional-skills">
              <p>Ukrainian - mother tongue</p>
            </div>

            <div class="card--additional-skills">
              <p>Russian - fluent</p>
            </div>
          </section>
        </div>
      </CVStylesWrapper>
    </ThemeProvider>
  );
};

export default Rezume;
