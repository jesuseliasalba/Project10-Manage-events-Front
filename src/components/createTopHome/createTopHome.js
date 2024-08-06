import { createDiv } from "../../utils/functions/createDiv";
import "./createTopHome.css";

export const createTopHome = (parent) => {
  const divLeft = createDiv("homeLeftDiv");
  divLeft.innerHTML = `
  <h1> Roller<span>Trip<Span> </h1>
  <p> Únete a los eventos mas locos y divertidos de todo el panorama español de patinaje. </p>
  `;

  const divRight = createDiv("homeRightDiv");
  divRight.innerHTML = `
    <div class="videoHero">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BDtga8NZLiM?&mute=1&autoplay=1&controls=0&loop=1" title="Valencia a Fuego" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>  
    </div>
`;

  parent.append(divLeft);
  parent.append(divRight);
};
