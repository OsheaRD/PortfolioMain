# PortfolioMain
 
// Tried the portfolio overlay but abandoned > > 

JS> 


// Portfolio Expansions >>>>>>>>>>>>>>>>>>


const cards = document.querySelectorAll('.card');

const toggleExpansion = (element, to, duration = 350) => {
    return new Promise((res) => {
      element.animate([
        {
      top: to.top,
      left: to.left,
      width: to.width,
      height: to.height
        }
      ], {duration, fill: 'forwards', ease: 'ease-in'})
      setTimeout(res, duration);
    })
  }

  const fadeContent = (element, opacity, duration = 300) => {
      return new Promise(res => {
          [...element.children].forEach((child) => {
              requestAnimationFrame(() => {
                  child.style.transition = `opacity ${duration}ms linear`;
                  child.style.opacity = opacity;
              });
          })
          setTimeout(res, duration);
      })
  }


// Returns the style of new card  >>>>>>>>>>>>>>>>>>>>>>>>

  const getCardContent = (title, type) => {
      return `
          <div class="card-content-expanded">
              <h2>${title}</h2>
              <img src=${type} alt="">

             <img src=${type} alt="">
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <h2>${title}</h2>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eligendi fuga ullam? Aperiam blanditiis
                  cupiditate dicta eius exercitationem explicabo fugit, impedit iure libero nam nihil nisi perferendis
                  provident quaerat repellendus vitae voluptate? Aliquid amet architecto asperiores aut consequuntur
                  corporis debitis ea eveniet in maiores, nam placeat quae, ratione rerum ullam?
              </p>
              <h2>${title}</h2>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eum ipsa molestiae nesciunt nostrum porro
                  reprehenderit? Animi corporis deleniti dolore laborum, nemo pariatur temporibus voluptatem.
              </p>

              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eum ipsa molestiae nesciunt nostrum porro
                  reprehenderit? Animi corporis deleniti dolore laborum, nemo pariatur temporibus voluptatem.
              </p>

              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eligendi fuga ullam? Aperiam blanditiis
                  cupiditate dicta eius exercitationem explicabo fugit, impedit iure libero nam nihil nisi perferendis
                  provident quaerat repellendus vitae voluptate? Aliquid amet architecto asperiores aut consequuntur
                  corporis debitis ea eveniet in maiores, nam placeat quae, ratione rerum ullam?
              </p>
          </div>
      `;
  }

  const onCardClick = async (e) => {
      document.body.style.overflow = 'hidden'; // stop body from scrolling when clone is open

      const card = e.currentTarget;
      // clone the card
      const cardClone = card.cloneNode(true);
      // get the location of the card in the view
      const {top, left, width, height} = card.getBoundingClientRect();
      // position the clone on top of the original
      cardClone.style.position = 'fixed';
      cardClone.style.top = top + 'px';
      cardClone.style.left = left + 'px';
      cardClone.style.width = width + 'px';
      cardClone.style.height = height + 'px';
      // hide the original card with opacity
      card.style.opacity = '0';
      
      // add card to the same container
      card.parentNode.appendChild(cardClone);
      // create a close button to handle the undo
      const closeButton = document.createElement('button');
      // position the close button top corner
      closeButton.style = `
          position: fixed;
          z-index: 10000;
          top: 35px;
          right: 35px;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background-color: #e25656;
      `;
      // attach click event to the close button
      closeButton.addEventListener('click', async () => {
        document.body.style.overflow = 'scroll'; // allow body scrolling on clone close
          // remove the button on close
          closeButton.remove();
          // remove the display style so the original content is displayed right
          cardClone.style.removeProperty('display');
          cardClone.style.removeProperty('padding');
          // show original card content
          [...cardClone.children].forEach(child => child.style.removeProperty('display'));
          fadeContent(cardClone, '0');
          // shrink the card back to the original position and size
          await toggleExpansion(cardClone, {top: `${top}px`, left: `${left}px`, width: `${width}px`, height: `${height}px`}, 300)
          // show the original card again
          card.style.removeProperty('opacity');
          // remove the clone card
          cardClone.remove();
      });
      // fade the content away
      fadeContent(cardClone, '0')
          .then(() => {
              [...cardClone.children].forEach(child => child.style.display = 'none');
          });
      // expand the clone card
      await toggleExpansion(cardClone, {top: 0, left: 0, width: '100vw', height: '100vh'});

      const content = getCardContent(card.textContent,"./images/iconmonstr-school-30.svg")
    
      // set the display block so the content will follow the normal flow in case the original card is not display block
      cardClone.style.display = 'block';
      cardClone.style.padding = '0';

      cardClone.style.overflow = 'scroll'; //ALLOWS CLONE TO SCROLL

      // append the close button after the expansion is done
      cardClone.appendChild(closeButton);
      cardClone.insertAdjacentHTML('afterbegin', content);
  };

  cards.forEach(card => card.addEventListener('click', onCardClick));

  // create an array of each set of pics then set a forEach




>>>>>>>>>>>>>>>>>>>>>

        <section id="applications" class="applications">
    
            <div class="container">
                <h1 class="section-heading"><span>Writing</span> Samples</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quam consequuntur reiciendis.</p>
                <div class="index-card-wrapper">
                    <div class="card">
                        <div class="img-wrapper">
                            <img src="./images/makingwebsite.jpeg" alt="">
                        </div>
                        <div class="card-content">
                            <a href="#">
                                <h1>Making the website: OsheaDeans.com</h1>
                            </a>
                            <!-- <span>July 25, 2021</span> -->
                            <p>profiles. MObile nav</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
    
                    <div class="card">
                        <div class="img-wrapper">
                            <img src="./images/contentstrategy.jpeg" alt="">
                        </div>
                        <div class="card-content">
                            <a href="#">
                                <h1>How I connect the dots between coding and content.</h1>
                            </a>
                            <!-- <span>July 25, 2021</span> -->
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae provident optio exercitationem praesentium facere.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae provident optio exercitationem praesentium facere.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
    
                    <div class="card">
                        <div class="img-wrapper">
                            <img src="images/scrumtransition.png" alt="">
                        </div>
                        <div class="card-content">
                            <a href="#">
                                <h1>Who I am as a teammate and what I look for in a team.</h1>
                            </a>
                            <!-- <span>July 25, 2021</span> -->
                            <p>Talent wins games, but teamwork and intelligence win championships.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    

        <script>
        function modalTriggerButtons(elem) {
            elem.addEventListener("click", event => toggleModal(event.currentTarget.getAttribute("data-modal-target")));
        }
        </script>