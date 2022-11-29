import React from "react";
import "../Styles/PageFooter.css";

const PageFooter = () => {
  return (
    <div id='footer'>
        <div className= 'footer-contents'>

            <div class='flex-child'>
              <p> Created by KeithBoard: </p>
              <p> This project is in honor of Kevin Snobnosky. </p>
              <a
                href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt"
                rel="noreferrer"
                target="_blank"
              >
                MIT License
              </a>
            </div>


        </div>
    </div>
  );
};

export default PageFooter;
