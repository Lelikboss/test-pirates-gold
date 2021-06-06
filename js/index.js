;(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]")
    const mobileMenuRef = document.querySelector("[data-menu]")
    menuBtnRef.addEventListener("click", () => {
      const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false
      menuBtnRef.classList.toggle("is-open")
      menuBtnRef.setAttribute("aria-expanded", !expanded)
      mobileMenuRef.classList.toggle("is-open")
    })
  })()
  const navEl = document.querySelector("[data-menu]");
  const menuBtnRef = document.querySelector("[data-menu-button]");
  navEl.addEventListener("click", (e) => {
    if (e.target instanceof HTMLAnchorElement) {
          navEl.classList.remove("is-open");
          menuBtnRef.classList.remove("is-open");
        }
  })

////////////////////////////////////
  // var arrSuit = ["#monkey", "#bone", "#chest", "&#9824"]	

  // var check = document.getElementById("inp")
  // var tern = document.getElementsByClassName("tern")
  // var allside = document.getElementsByClassName("allside")

  // check.addEventListener("click", function(){
  // }

  // let array = ["#monkey", "#bone", "#box"]

