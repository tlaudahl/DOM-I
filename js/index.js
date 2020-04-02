const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

$(document).ready(() => {
  // <--------- Nav ----------->
  $("a").eq(0).text(siteContent['nav']['nav-item-1']).css("color", "black")
  $("a").eq(1).text(siteContent['nav']['nav-item-2']).css("color", "black")
  $("a").eq(2).text(siteContent['nav']['nav-item-3']).css("color", "black")
  $("a").eq(3).text(siteContent['nav']['nav-item-4']).css("color", "black")
  $("a").eq(4).text(siteContent['nav']['nav-item-5']).css("color", "black")
  $("a").eq(5).text(siteContent['nav']['nav-item-6']).css("color", "black")
  $("#logo-img").attr("src", siteContent['nav']['img-src'])

  // <--------- Nav (Step 3) ----------->
  $("<a href='#'>Prepend</a>").insertBefore("nav a:first")
  $("<a href='#'>Append</a>").insertAfter("nav a:last")

  // <--------- CTA ----------->
  $(".cta-text h1").text(siteContent['cta']['h1']).css({ color: "black", fontWeight: "bold", fontSize: '32' })
  $("#cta-img").attr('src', siteContent['cta']['img-src'])
  $("#getStarted").text(siteContent['cta']['button'])

  // <--------- CTA (Stretch) ----------->
  $("#cta-img").on("click", function(event) {
    $(this).toggleClass("gray")
  })

  // <--------- Main Content Top ----------->
  $(".top-content h4:first").text(siteContent['main-content']['features-h4'])
  $(".top-content p:first").text(siteContent['main-content']['features-content'])
  $(".top-content h4:last").text(siteContent['main-content']['about-h4'])
  $(".top-content p:last").text(siteContent['main-content']['about-content'])

  // <--------- Middle Image ----------->
  $(".middle-img").attr("src", siteContent['main-content']['middle-img-src'])

  // <--------- Main Content Bottom ----------->
  $(".bottom-content h4").eq(0).text(siteContent['main-content']['services-h4'])
  $(".bottom-content p").eq(0).text(siteContent['main-content']['services-content'])
  $(".bottom-content h4").eq(1).text(siteContent['main-content']['product-h4'])
  $(".bottom-content p").eq(1).text(siteContent['main-content']['product-content'])
  $(".bottom-content h4").eq(2).text(siteContent['main-content']['vision-h4'])
  $(".bottom-content p").eq(2).text(siteContent['main-content']['vision-content'])

  // <--------- Contact ----------->
  $(".contact h4").text(siteContent['contact']['contact-h4'])
  $(".contact p").eq(0).text(siteContent['contact']['address'])
  $(".contact p").eq(1).text(siteContent['contact']['phone'])
  $(".contact p").eq(2).text(siteContent['contact']['email'])

  // <--------- Footer ----------->
  $("footer p").text(siteContent['footer']['copyright'])
})