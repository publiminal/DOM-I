const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

/* define dom instances  */
const _dm = document; // shorthand for document
const _dt = siteContent; // shorthand for data
// formated mainContent 
const mainArr = Object.values(_dt["main-content"] ); // create arr from MainContent Obj

// console.log("minArr" , mainArr );
const mainContent = []
for (let index = 0; index < mainArr.length; index++) {
  mainContent.push({title:mainArr[index], titleValue:mainArr[index+1]});
  index++
}
// debugger
// console.log(`mainContent,`,mainContent );

const me = {
  nav:{dom:_dm.querySelectorAll("nav a "), data:_dt.nav},
  logo:{dom:_dm.querySelector("header img"), data:_dt.images["logo-img"]},
  cta:{dom:_dm.querySelector("h1"), data:_dt.cta.h1},
  ctaBtn :{dom:_dm.querySelector("h1 ~ Button "), data:_dt.cta.button},
  ctaImg :{dom:_dm.querySelector("section img"), data:_dt.images["cta-img"]},
  mainContent:{dom:_dm.querySelectorAll(".main-content  h4"),data:mainContent},
  midImage:{dom:_dm.querySelector("section ~ section img"), data:_dt.images["accent-img"]},
  contact:{dom:_dm.querySelector(".contact"), data:_dt.contact},
  footer:{dom:_dm.querySelector("footer a"), data:_dt.footer}
  }
 

// debugger

/* update header  */
/* update nav links  */
me.nav.dom.forEach(( link, idx ) => {  
  // debugger
  // const test = me.nav.data[`nav-item-${idx}`];
  link.href = "#";
  link.textContent = me.nav.data[`nav-item-${idx+1}`];
  link.classList.add("italic");
});

// update img logo
me.logo.dom.src = me.logo.data 

//update cta text
me.cta.dom.textContent = me.cta.data

// update cta Button
me.ctaBtn.dom.textContent = me.ctaBtn.data;

// update cta Image
me.ctaImg.dom.src = me.ctaImg.data;

//update mainContent
// console.log(me.mainContent.dom )
me.mainContent.dom.forEach(( h4, idx ) => {  
  h4.textContent = me.mainContent.data[idx].title ; // udpate h4 
  h4.nextElementSibling.textContent = me.mainContent.data[idx].titleValue ; // update h4 text below
});

//update midImage
me.midImage.dom.src = me.midImage.data;

//update contact
me.contact.dom.children[0].textContent = me.contact.data["contact-h4"]   //h4
me.contact.dom.children[1].textContent = me.contact.data.address   //address
me.contact.dom.children[2].textContent = me.contact.data.phone   //phone
me.contact.dom.children[3].textContent = me.contact.data.email   //phone

//update footer
me.footer.dom.textContent = me.footer.data.copyright;
me.footer.dom.classList.add("bold");

