---

########################### Hero slider ############################
hero_slider:
  enable : true
  slider_item:
    # slider item
    - subtitle : "At the heart of a wildlife forest garden"
      title : "Community Assembly at the heart of a wildlife forest garden 💚"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      bg_image : "https://res.cloudinary.com/growdigital/image/upload/f_auto/v1719180071/treeline-5376229E-3114.jpg"
      animation : "fadeInUp" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "more details"
        link : "about/"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/
        

################################## banner feature ############################
banner_feature:
  enable : true
  # Max use 4 item
  feature_item:
    # banner feature item loop
    - name : "Community Assembly"
      icon : "fa fa-fist-raised" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Direct democracy in local decision making"
      
    # banner feature item loop
    - name : "Wildlife"
      icon : "fa fa-frog" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Native plants for insects & habitat for everyone"
      
    # banner feature item loop
    - name : "Forest garden"
      icon : "fab fa-pagelines" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Lorem ipsum dolor sit amet constur adipelit sed."



################################## about ####################################
about:
  enable : true
  subtitle : "About us"
  title : "Enabling direct democracy & nature recovery"
  content : "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt mollit anim est. laborum sed perspiciatis unde omnis natus error sit voluptatem accusantium."
  bg_image : "images/backgrounds/about-us-bg.png"
  image : "images/about/about-us.png"
  button:
    enable : true;
    label : "Get involved"
    link : "service/"

################################## Fun facts ###############################
funfacts :
  enable : false
  funfacts_item :
    # fanfacts item loop
    - name : "project done"
      count : "50"
      icon : "fas fa-bullseye" # font-awesome 5 : https://fontawesome.com/icons/
      
    # fanfacts item loop
    - name : "Years Experience"
      count : "25"
      icon : "far fa-calendar-alt" # font-awesome 5 : https://fontawesome.com/icons/
      
    # fanfacts item loop
    - name : "Awards Win"
      count : "250"
      icon : "fas fa-award" # font-awesome 5 : https://fontawesome.com/icons/
      
    # fanfacts item loop
    - name : "Happy Coustomers"
      count : "500"
      icon : "far fa-smile" # font-awesome 5 : https://fontawesome.com/icons/


################################# feature ############################################
feature:
  enable : false
  subtitle : "Why Choose Us"
  title : "Why They Choose Bexar"
  image_webp : "images/feature/feature.webp"
  image : "images/feature/feature.jpg"
  content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius tempor incididunt ut labore."
  feature_item:
    # feature item loop
    - name : "Creative Design"
      icon : "far fa-snowflake" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia."
      
    # feature item loop
    - name : "Pixel Perfect Coding"
      icon : "fas fa-code" # font-awesome 5 : https://fontawesome.com/icons/
      content : "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia."

################################# Service ############################################
service:
  enable : false
  section: "service"
  show_item : 3
  # service item comes from "content/*/service" folder

################################# Team ##############################################
team:
  enable : true
  section: "team"
  show_item : 3
  # team member comes from "content/*/team" folder

################################# Project ############################################
project:
  enable : false
  section: "project"
  show_item : 4
  button:
    enable : true
    label : "more projects"
    link : "project/"
  # project item comes from "content/*/project" folder

################################# Testimonial #########################################
testimonial:
  enable : false
  subtitle : "Testimonials"
  title : "What Clients Are Say?"
  testimonial_item:
    # testimonial item loop
    - client_image : "images/testimonial/client-1.jpg"
      name : "Dominic Allen"
      designation : "Designer"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua.enim ad minim veniam.quis nostrud exercitation ullamco laboris nis aliquip ex ea commodo consequat. duis aute irure dolor in reprehen."
      
    # testimonial item loop
    - client_image : "images/testimonial/client-2.jpg"
      name : "Alex Pitt"
      designation : "Designer"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua.enim ad minim veniam.quis nostrud exercitation ullamco laboris nis aliquip ex ea commodo consequat. duis aute irure dolor in reprehen."

    # testimonial item loop
    - client_image : "images/testimonial/client-3.jpg"
      name : "John Doe"
      designation : "Designer"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore dolore magna aliqua.enim ad minim veniam.quis nostrud exercitation ullamco laboris nis aliquip ex ea commodo consequat. duis aute irure dolor in reprehen."


################################# blog ################################################
cta:
  enable : false
  title : "Bexar give the smart solution for your business"
  bg_image_webp : "images/backgrounds/cta-lg.webp"
  bg_image : "images/backgrounds/cta-lg.jpg"
  button:
    enable : true
    label : "get a quote"
    link : "contact/"

################################# blog ################################################
blog:
  enable : true
  section : "blog"
  show_item : 3
  # blog post comes from "content/*/blog" folder

---
