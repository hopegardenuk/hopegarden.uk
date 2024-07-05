---

########################### Hero slider ############################
hero_slider:
  enable : true
  slider_item:
    # slider item
    - subtitle : "Something hopeful this way comes"
      title : "Community Assembly at the heart of a wildlife forest garden"
      content : "Providing an experimental toolkit to create a community meeting space surrounded by a thriving, productive wildlife garden. Prototype located in north Pembrokeshire, West Wales, UK."
      bg_image : "https://res.cloudinary.com/hopegarden/image/upload/v1719872235/elephant-garlic-flower-169.jpg"
      animation : "fadeInUp" # animation select from : https://daneden.github.io/animate.css/
      button:
        enable : true
        label : "About the project"
        link : "about/"
        animation : "zoomIn" # animation select from : https://daneden.github.io/animate.css/
        

################################## banner feature ############################
banner_feature:
  enable : true
  # Max use 4 item
  feature_item:
    # banner feature item loop
    - name : "Democracy"
      icon : "fa fa-fist-raised" # font-awesome 5 : https://fontawesome.com/v5/search
      content : "A Community Assembly is direct democracy in local decision making "
      link: /about
      
    # banner feature item loop
    - name : "Wildlife"
      icon : "fa fa-frog" # font-awesome 5 : https://fontawesome.com/v5/search
      content : "Grow native plants where possible for insects, create habitat for everyone"
      link: /about
      
    # banner feature item loop
    - name : "Sustainable food"
      icon : "fab fa-pagelines" # font-awesome 5 : https://fontawesome.com/v5/search
      content : "A forest garden, with fruit & nut trees, edible shrubs & perennial veg"
      link: /about



################################## about ####################################
about:
  enable : true
  subtitle : "Enabling direct democracy & nature recovery"
  title : "Working with communities"
  content : "Our partners are local communities and organisations, working together to build not just a community garden but also a toolkit for everyone that wants to create their own space for direct democracy and nature recovery.<br>This is a work-in-progress, sign up to our newsletter to be kept updated."
  bg_image : ""
  image : "https://res.cloudinary.com/hopegarden/image/upload/v1719873215/231012-red-apple.jpg"
  button:
    enable : true;
    label : "Subscribe to newsletter"
    link : "newsletter/"

################################## Fun facts ###############################
funfacts :
  enable : false
  funfacts_item :
    # fanfacts item loop
    - name : "project done"
      count : "50"
      icon : "fas fa-bullseye" # font-awesome 5 : https://fontawesome.com/v5/search
      
    # fanfacts item loop
    - name : "Years Experience"
      count : "25"
      icon : "far fa-calendar-alt" # font-awesome 5 : https://fontawesome.com/v5/search
      
    # fanfacts item loop
    - name : "Awards Win"
      count : "250"
      icon : "fas fa-award" # font-awesome 5 : https://fontawesome.com/v5/search
      
    # fanfacts item loop
    - name : "Happy Coustomers"
      count : "500"
      icon : "far fa-smile" # font-awesome 5 : https://fontawesome.com/v5/search


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
      icon : "far fa-snowflake" # font-awesome 5 : https://fontawesome.com/v5/search
      content : "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia."
      
    # feature item loop
    - name : "Pixel Perfect Coding"
      icon : "fas fa-code" # font-awesome 5 : https://fontawesome.com/v5/search
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
